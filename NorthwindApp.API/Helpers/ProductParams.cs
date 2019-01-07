namespace NorthwindApp.API.Helpers
{
    public class ProductParams : PageParams
    {
        public int? CategoryId { get; set; }
        public string ProductName { get; set; }
    }
}