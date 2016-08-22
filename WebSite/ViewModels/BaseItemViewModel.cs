using System.ComponentModel;

namespace WebSite.ViewModels
{
    public class BaseItemViewModel
    {
        [DisplayName("Name")]
        public string ItemName { get; set; }
        [DisplayName("Description")]
        public string Affix { get; set; }
        [DisplayName("Season")]
        public bool IsCubedSeason { get; set; }
        [DisplayName("Non-Season")]
        public bool IsCubedNonSeason { get; set; }
        [DisplayName("Stashed")]
        public bool IsStashed { get; set; }
    }
}
