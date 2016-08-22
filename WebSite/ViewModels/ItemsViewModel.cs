using System.Collections.Generic;

namespace WebSite.ViewModels
{
    public class ItemsViewModel
    {
        public IEnumerable<BaseItemViewModel> Weapons { get; set; }
        public IEnumerable<BaseItemViewModel> Armors { get; set; }
        public IEnumerable<BaseItemViewModel> Jewelry { get; set; }
    }
}