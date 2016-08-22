using System.Web.Mvc;
using WebSite.Services;

namespace WebSite.Controllers
{
    public class JewelryController : Controller
    {
        private readonly ItemsService _weaponsService = new ItemsService();
        // GET: Jewelry
        public ActionResult Index()
        {
            var model = _weaponsService.GetAllJewelry();
            return View(model);
        }
    }
}