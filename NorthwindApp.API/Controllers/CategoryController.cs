using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NorthwindApp.API.Models;
using NorthwindApp.API.ViewModels;

namespace NorthwindApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly NorthwindContext _context;
        public CategoryController(NorthwindContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var values = await _context.Categories
            .Include(c => c.Products)
            .Select(c => new CategoryViewModel()
                {
                    CategoryId = c.CategoryId,
                    CategoryName = c.CategoryName,
                    Description = c.Description,
                    Products = c.Products.Select(p => new ProductViewModel(){
                        ProductId = p.ProductId,
                        ProductName = p.ProductName
                    }).ToList()
                }).ToListAsync();

            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var value = await _context.Categories
            // .Include(c => c.Products)
            .Where(c => c.CategoryId == id)
            .Select(c => new CategoryViewModel()
                {
                    CategoryId = c.CategoryId,
                    CategoryName = c.CategoryName,
                    Description = c.Description,
                    Products = c.Products.Select(p => new ProductViewModel(){
                        ProductId = p.ProductId,
                        ProductName = p.ProductName
                    }).ToList()
                }).FirstOrDefaultAsync();

            return Ok(value);
        }
    }
}