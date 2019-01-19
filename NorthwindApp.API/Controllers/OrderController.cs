using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NorthwindApp.API.Helpers;
using NorthwindApp.API.Models;
using NorthwindApp.API.Repository;

namespace NorthwindApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderRepository _repo;

        public OrderController(OrderRepository repository)
        {
            _repo = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]OrderParams orderParams)
        {
            var orders = await this._repo.GetOrdersAsync(orderParams);
            
            Response.AddPaginationHeader(orders.CurrentPage, orders.PageSize,
                orders.TotalCount, orders.TotalPages);

            return Ok(orders.ToOrderViewModelList());
        }
    }
}