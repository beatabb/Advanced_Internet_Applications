using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WebApplication3
{
    public class RouteConfig
    {
        // służy do przechowywania reguł mapujących adresy na akcje kontrolerów
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // dodaje pojedynczą regułę do kolekcji
            routes.MapRoute(
                // name - służy do podania nazwy reguły
                name: "Default",
                // url - przekazuje wzorzec adresu
                url: "{controller}/{action}/{id}",
                // defaults -  zawiera przypisanie wartości domyślnych
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
