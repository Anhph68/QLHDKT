using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KTNN.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult infoModal()
        {
            return PartialView();
        }

        public ActionResult passwordModal()
        {
            return PartialView();
        }
    }
}