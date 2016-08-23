using System.Web.Mvc;
using WebSite.Services;

namespace WebSite.Controllers
{
    public class SettingsController : Controller
    {
        private readonly ItemsService _itemService = new ItemsService();
        // GET: Settings
        public ActionResult Index()
        {
            return View(_itemService.GetAllSettings());
        }
    }
}