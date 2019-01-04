using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NorthwindApp.API.Helpers;
using NorthwindApp.API.Models;
using NorthwindApp.API.Repository;
using NorthwindApp.API.ViewModels;

namespace NorthwindApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly NorthwindContext _context;
        private readonly ProductRepository _repo;

        public ProductController(NorthwindContext context, ProductRepository repository)
        {
            _context = context;
            _repo = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]ProductParams productParams)
        {
            var products = await this._repo.GetProductsAsync(productParams);
            var model = new List<ProductViewModel>();

            foreach (var p in products)
            {
                model.Add(new ProductViewModel()
                {
                    ProductId = p.ProductId,
                    ProductName = p.ProductName,
                    Discontinued = p.Discontinued,
                    QuantityPerUnit = p.QuantityPerUnit,
                    ReorderLevel = p.ReorderLevel,
                    SupplierId = p.SupplierId,
                    UnitPrice = p.UnitPrice,
                    UnitsInStock = p.UnitsInStock,
                    UnitsOnOrder = p.UnitsOnOrder,
                    CategoryId = p.CategoryId,
                    CategoryName = p.Category != null ? p.Category.CategoryName : "",
                    SupplierName = p.Supplier != null ? p.Supplier.CompanyName : ""
                });
            }

            Response.AddPagination(products.CurrentPage, products.PageSize,
                products.TotalCount, products.TotalPages);

            return Ok(model);
        }

        [HttpGet("{id}", Name = "GetProduct")]
        public async Task<IActionResult> Get(int id)
        {
            var value = await _context.Products
            .Where(i => i.ProductId == id)
            .Select(c => new ProductViewModel()
            {
                ProductId = c.ProductId,
                ProductName = c.ProductName,
                Discontinued = c.Discontinued,
                QuantityPerUnit = c.QuantityPerUnit,
                ReorderLevel = c.ReorderLevel,
                SupplierId = c.SupplierId,
                UnitPrice = c.UnitPrice,
                UnitsInStock = c.UnitsInStock,
                UnitsOnOrder = c.UnitsOnOrder,
                CategoryId = c.CategoryId,
                CategoryName = c.Category != null ? c.Category.CategoryName : "",
                SupplierName = c.Supplier != null ? c.Supplier.CompanyName : ""
            }).FirstOrDefaultAsync();

            return Ok(value);
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add([FromBody] ProductViewModel c)
        {
            if (_context.Products.Any(i => i.ProductName == c.ProductName))
            {
                ModelState.AddModelError("ProductName", "Product Name already exists");
            }

            if (!_context.Categories.Any(i => i.CategoryId == c.CategoryId.Value))
            {
                ModelState.AddModelError("CategoryName", "Category is invalid");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = new Products()
            {
                ProductId = c.ProductId,
                ProductName = c.ProductName,
                Discontinued = c.Discontinued,
                QuantityPerUnit = c.QuantityPerUnit,
                ReorderLevel = c.ReorderLevel,
                SupplierId = c.SupplierId,
                UnitPrice = c.UnitPrice,
                UnitsInStock = c.UnitsInStock,
                UnitsOnOrder = c.UnitsOnOrder,
                CategoryId = c.CategoryId
            };

            await _context.Products.AddAsync(entity);

            await _context.SaveChangesAsync();

            return CreatedAtRoute("GetProduct", new { controller = "Product", id = entity.ProductId }, entity);
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] ProductViewModel c)
        {
            var entity = await _context.Products.Where(i => i.ProductId == id).FirstOrDefaultAsync();

            if (entity != null)
            {
                entity.ProductId = c.ProductId;
                entity.ProductName = c.ProductName;
                entity.Discontinued = c.Discontinued;
                entity.QuantityPerUnit = c.QuantityPerUnit;
                entity.ReorderLevel = c.ReorderLevel;
                entity.SupplierId = c.SupplierId;
                entity.UnitPrice = c.UnitPrice;
                entity.UnitsInStock = c.UnitsInStock;
                entity.UnitsOnOrder = c.UnitsOnOrder;
                entity.CategoryId = c.CategoryId;
            }
            else
            {
                return BadRequest("Product doesn't exist");
            }

            await _context.SaveChangesAsync();

            return Ok(c);
        }

    }
}