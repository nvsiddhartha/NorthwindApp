using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NorthwindApp.API.Helpers;
using NorthwindApp.API.Models;
using NorthwindApp.API.ViewModels;

namespace NorthwindApp.API.Repository
{
    public class ProductRepository
    {
        private readonly NorthwindContext _context;
        public ProductRepository(NorthwindContext context)
        {
            _context = context;
        }

        public async Task<PagedList<Products>> GetProductsAsync(ProductParams productParams)
        {
            var products = _context.Products
                .Include(p => p.Category)
                .Include(p => p.Supplier)
                .OrderBy(p => p.ProductId)
                .AsQueryable();

            if (productParams.CategoryId.HasValue && productParams.CategoryId.Value > 0)
            {
                products = products.Where(p => p.CategoryId == productParams.CategoryId.Value);
            }
            if (!string.IsNullOrEmpty(productParams.ProductName))
            {
                products = products.Where(p => p.ProductName.Contains(productParams.ProductName, StringComparison.CurrentCultureIgnoreCase));
            }

            return await PagedList<Products>.CreateAsync(products, productParams.PageNumber, productParams.PageSize);
        }
    }
}