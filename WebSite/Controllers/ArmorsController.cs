using System.Web.Mvc;
using WebSite.Services;

namespace WebSite.Controllers
{
    public class ArmorsController : Controller
    {
        private readonly ItemsService _weaponsService = new ItemsService();
        // GET: Armors
        public ActionResult Index()
        {
            var model = _weaponsService.GetAllArmors();
            return View(model);
        }
    }
}