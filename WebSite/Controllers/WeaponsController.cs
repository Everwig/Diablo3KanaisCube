using System.Web.Mvc;
using WebSite.Services;

namespace WebSite.Controllers
{
    public class WeaponsController : Controller
    {
        private readonly ItemsService _weaponsService = new ItemsService();
        // GET: Weapons
        public ActionResult Index()
        {
            var model = _weaponsService.GetAllWeapons();
            return View(model);
        }
    }
}