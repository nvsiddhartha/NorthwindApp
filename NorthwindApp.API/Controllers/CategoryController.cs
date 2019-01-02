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
                Products = c.Products.Select(p => new ProductViewModel()
                {
                    ProductId = p.ProductId,
                    ProductName = p.ProductName
                }).ToList()
            }).ToListAsync();

            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetCategory")]
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
                Products = c.Products.Select(p => new ProductViewModel()
                {
                    ProductId = p.ProductId,
                    ProductName = p.ProductName
                }).ToList()
            }).FirstOrDefaultAsync();

            return Ok(value);
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add([FromBody] CategoryViewModel model)
        {
            var entity = new Categories()
            {
                CategoryId = 0,
                CategoryName = model.CategoryName,
                Description = model.Description
            };

            if (model.CategoryName.Length > 15)
            {
                return BadRequest("CategoryName is too long");
            }

            await _context.Categories.AddAsync(entity);

            await _context.SaveChangesAsync();

            return CreatedAtRoute("GetCategory", new { controller = "Category", id = entity.CategoryId }, entity);
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> Edit(int id, [FromBody] CategoryViewModel model)
        {
            var entity = await _context.Categories.Where(i => i.CategoryId == id).FirstOrDefaultAsync();

            if (entity != null)
            {
                entity.CategoryName = model.CategoryName;
                entity.Description = model.Description;
            }
            else
            {
                return BadRequest("Category doesn't exist");
            }

            if (model.CategoryName.Length > 15)
            {
                return BadRequest("CategoryName is too long");
            }

            await _context.SaveChangesAsync();

            return Ok(model);
        }
    }
}