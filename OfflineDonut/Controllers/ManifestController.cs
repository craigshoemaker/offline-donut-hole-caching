using System.Web;
using System.Web.Mvc;

namespace OfflineDonut.Controllers
{
    public class ManifestController : Controller
    {
        public ActionResult Index()
        {
            Response.ContentType = "text/cache-manifest";
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            return View();
        }
    }
}