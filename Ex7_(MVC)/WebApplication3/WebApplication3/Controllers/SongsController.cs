using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class SongsController : Controller
    {
        // GET: Songs
        public ActionResult Index()
        {
            return Content("Hello World!");
        }

        public ActionResult Square(int? id)
        {
            if(id == null)
            {
                return Content("0");
            }
            string squNum = (id* id).ToString();
            return Content(squNum);
        }
    }
}