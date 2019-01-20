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

        public static void AddPaginationHeader(this HttpResponse response,
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
    
        public static OrderViewModel ToOrderViewModel(this Orders p)
        {
            return new OrderViewModel()
            {
                OrderId =  p.OrderId,
                CustomerId = p.CustomerId,
                EmployeeId = p.EmployeeId,
                Freight = p.Freight,
                OrderDate = p.OrderDate,
                RequiredDate = p.RequiredDate,
                ShipAddress = p.ShipAddress,
                ShipCity = p.ShipCity,
                ShipCountry = p.ShipCountry,
                ShipName = p.ShipName,
                ShipPostalCode = p.ShipPostalCode,
                ShipRegion = p.ShipRegion,
                ShipVia = p.ShipVia,
                ShippedDate = p.ShippedDate,
                Employee = p.Employee != null ? p.Employee.LastName + " " + p.Employee.FirstName : "",
                Customer = p.Customer != null ? p.Customer.CompanyName : "",
                OrderDetails = p.OrderDetails.ToModelList()
            };
        }

        public static IEnumerable<OrderViewModel> ToOrderViewModelList(this PagedList<Orders> orders)  
        {
            var model = new List<OrderViewModel>();
            foreach (var p in orders)
            {
                model.Add(p.ToOrderViewModel());
            }
            return model;
        }  
    
        public static OrderDetailModel ToModel(this OrderDetails d)
        {
            return new OrderDetailModel()
            {
                OrderId = d.OrderId,
                Quantity = d.Quantity,
                Discount = d.ProductId,
                UnitPrice = d.UnitPrice,
                ProductId = d.ProductId
            };
        }

        public static ICollection<OrderDetailModel> ToModelList(this ICollection<OrderDetails> orders)  
        {
            var model = new List<OrderDetailModel>();
            foreach (var p in orders)
            {
                model.Add(p.ToModel());
            }
            return model;
        }  
    }
}