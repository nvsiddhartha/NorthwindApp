using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NorthwindApp.API.Helpers;
using NorthwindApp.API.Models;
using NorthwindApp.API.Repository;
using NorthwindApp.API.ViewModels;

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

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<IActionResult> Get(int id)
        {
            var order = await _repo.GetOrderAsync(id);

            if(order != null) {
                return Ok(order.ToOrderViewModel());
            }

            return NotFound();
        }

        [HttpPost("add")]
        public async Task<IActionResult> Add([FromBody] OrderViewModel c)
        {
            // c.OrderDate = DateTime.Now;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var entity = c.ToOrders();
            var order = await _repo.AddOrder(entity);

            if (order != null)
            {
                return Ok(order.ToOrderViewModel());
            }

            return BadRequest();
        }
    }
}