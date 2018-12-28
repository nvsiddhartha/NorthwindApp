using Microsoft.AspNetCore.Mvc;
using NorthwindApp.API.Models;

namespace NorthwindApp.API.Controllers
{
    public class ProductController : ControllerBase
    {
        private readonly NorthwindContext _context;
        public ProductController(NorthwindContext context)
        {
            _context = context;
        }
    }

    
}