using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NorthwindApp.API.ViewModels
{
    public class OrderViewModel
    {
        public OrderViewModel()
        {
            OrderDetails = new List<OrderDetailModel>();
        }
        
        public int OrderId { get; set; }

        [Required(ErrorMessage="Customer is required")]
        public string CustomerId { get; set; }
        public int? EmployeeId { get; set; }

        [Required(ErrorMessage="Order date is required")]
        public DateTime? OrderDate { get; set; }
        public DateTime? RequiredDate { get; set; }
        public DateTime? ShippedDate { get; set; }
        public int? ShipVia { get; set; }
        public decimal? Freight { get; set; }
        public string ShipName { get; set; }
        public string ShipAddress { get; set; }
        public string ShipCity { get; set; }
        public string ShipRegion { get; set; }
        public string ShipPostalCode { get; set; }
        public string ShipCountry { get; set; }
        public string Employee { get; set; }
        public string Customer { get; set; }

        public virtual ICollection<OrderDetailModel> OrderDetails { get; set; }
    }
}