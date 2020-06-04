using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication3.Models;

namespace WebApplication3.Controllers
{
    // Metody w kontrolerze to tzw. akcje i są one
    // wywoływane przy pomocy żądań HTTP skierowanych pod odpowiednie adresy.


    // View() - . Funkcja ta zwraca
    // w odpowiedzi na żądanie stronę wygenerowaną na podstawie widoku odpowiadającemu danej
    // akcji.
    public class SongsController : Controller
    {
        // GET: Songs
        public ActionResult Index()
        {
            Song song = new Song();
            song.Name = "TheGreatest";
            song.Artist = "Lana Del Rey";
            song.Genre = "Alternative";

            song.Id = 1;

            // Aby móc skorzystać z tego modelu należy
            // zdefiniować silnie typowany widok

            // Aby zdefiniować silnie typowany widok wystarczy skorzystać w widoku z klauzuli @model, po
            // której należy podać klasę, która ma posłużyć jako model. --> Index.cshtml
            return View(song.Name);
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