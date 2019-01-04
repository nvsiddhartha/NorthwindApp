using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NorthwindApp.API.Models;
using NorthwindApp.API.ViewModels;

namespace NorthwindApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
        private readonly NorthwindContext _context;
        public SupplierController(NorthwindContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var values = await _context.Suppliers
            .Select(c => new SupplierViewModel()
            {
                SupplierId = c.SupplierId,
                CompanyName = c.CompanyName,
                ContactName = c.ContactName
            }).ToListAsync();

            return Ok(values);
        }
    }
}