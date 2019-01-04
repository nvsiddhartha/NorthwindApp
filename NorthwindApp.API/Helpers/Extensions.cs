using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using NorthwindApp.API.Models;
using NorthwindApp.API.ViewModels;

namespace NorthwindApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }

        public static void AddPagination(this HttpResponse response,
            int currentPage, int itemsPerPage, int totalItems, int totalPages)
        {
            PaginationHeaders paginationHeaders = new PaginationHeaders(currentPage, itemsPerPage, totalItems, totalPages);
            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            response.Headers.Add("Pagination", JsonConvert.SerializeObject(paginationHeaders, camelCaseFormatter));
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }

        public static ProductViewModel ToProductViewModel(this Products p)
        {
            return new ProductViewModel()
            {
                ProductId = p.ProductId,
                ProductName = p.ProductName,
                Discontinued = p.Discontinued,
                QuantityPerUnit = p.QuantityPerUnit,
                ReorderLevel = p.ReorderLevel,
                SupplierId = p.SupplierId,
                UnitPrice = p.UnitPrice,
                UnitsInStock = p.UnitsInStock,
                UnitsOnOrder = p.UnitsOnOrder,
                CategoryId = p.CategoryId,
                CategoryName = p.Category != null ? p.Category.CategoryName : "",
                SupplierName = p.Supplier != null ? p.Supplier.CompanyName : ""
            };
        }

        public static IEnumerable<ProductViewModel> ToProductViewModelList(this PagedList<Products> products)
        {
            var model = new List<ProductViewModel>();

            foreach (var p in products)
            {
                model.Add(p.ToProductViewModel());
            }

            return model;
        }
    }
}