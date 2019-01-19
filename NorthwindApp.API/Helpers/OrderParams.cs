using System;

namespace NorthwindApp.API.Helpers
{
    public class OrderParams : PageParams
    {
        public string CustomerId { get; set; }
        public DateTime? OrderDate { get; set; }
        public int? EmployeeId { get; set; }
    }
}