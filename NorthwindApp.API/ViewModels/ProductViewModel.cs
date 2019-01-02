using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NorthwindApp.API.ViewModels
{
    public class ProductViewModel
    {
        public ProductViewModel()
        {

        }

        public int ProductId { get; set; }

        [MaxLength(25, ErrorMessage = "Name cannot be longer than 25 characters.")]
        public string ProductName { get; set; }
        public int? SupplierId { get; set; }

        [Required(ErrorMessage = "Category is required")]
        public int? CategoryId { get; set; }
        public string QuantityPerUnit { get; set; }
        public decimal? UnitPrice { get; set; }
        public short? UnitsInStock { get; set; }
        public short? UnitsOnOrder { get; set; }
        public short? ReorderLevel { get; set; }
        public bool Discontinued { get; set; }
        public string CategoryName { get; set; }
        public string SupplierName { get; set; }
    }
}