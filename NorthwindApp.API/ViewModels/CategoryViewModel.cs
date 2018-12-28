using System;
using System.Collections.Generic;
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
        public string CategoryName { get; set; }
        public string Description { get; set; }

        public ICollection<ProductViewModel> Products { get; set; }
    }
}
