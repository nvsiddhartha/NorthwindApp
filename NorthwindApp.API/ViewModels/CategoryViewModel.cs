using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NorthwindApp.API.ViewModels
{
    public class CategoryViewModel
    {
        public CategoryViewModel()
        {
            Products = new List<ProductViewModel>();
        }
        public int CategoryId { get; set; }

        [MaxLength(15, ErrorMessage = "Name cannot be longer than 15 characters.")]
        public string CategoryName { get; set; }

        [MaxLength(50, ErrorMessage = "Description cannot be longer than 15 characters.")]
        public string Description { get; set; }

        public ICollection<ProductViewModel> Products { get; set; }
    }
}
