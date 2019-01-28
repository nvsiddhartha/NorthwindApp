using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NorthwindApp.API.Helpers;
using NorthwindApp.API.Models;
using NorthwindApp.API.ViewModels;

namespace NorthwindApp.API.Repository
{
    public class OrderRepository
    {
        private readonly NorthwindContext _context;
        
        public OrderRepository(NorthwindContext context)
        {
            _context = context;
        }

        public async Task<PagedList<Orders>> GetOrdersAsync(OrderParams ordersParams)
        {
            var orders = _context.Orders
                .Include(p => p.Employee)
                .Include(p => p.Customer)
                .Include(p => p.OrderDetails)
                .OrderBy(p => p.OrderId)
                .AsQueryable();

            if (ordersParams.EmployeeId.HasValue && ordersParams.EmployeeId.Value > 0)
            {
                orders = orders.Where(p => p.EmployeeId == ordersParams.EmployeeId.Value);
            }
            if (ordersParams.OrderDate.HasValue)
            {
                orders = orders.Where(o => o.OrderDate >= ordersParams.OrderDate.Value.AddDays(-10) && o.OrderDate <= ordersParams.OrderDate.Value.AddDays(10));
            }

            return await PagedList<Orders>.CreateAsync(orders, ordersParams.PageNumber, ordersParams.PageSize);
        }
        
        public async Task<Orders> GetOrderAsync(int orderId)
        {
            return await _context.Orders
                .Include(i => i.OrderDetails)
                .Include(i => i.Employee)
                .Include(i => i.Customer)
                .Where(i => i.OrderId == orderId)
                .FirstOrDefaultAsync();
        }

        public async Task<Orders> AddOrder(Orders entity)
        {
            await _context.Orders.AddAsync(entity);

            await _context.SaveChangesAsync();

            return entity;
        }
    }
}