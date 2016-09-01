using System.Collections.Generic;
using System.ComponentModel;

namespace WebSite.ViewModels
{
    public class ItemsViewModel
    {
        public IEnumerable<BaseItemViewModel> Weapons { get; set; }
        public IEnumerable<BaseItemViewModel> Armors { get; set; }
        public IEnumerable<BaseItemViewModel> Jewelry { get; set; }
        [DisplayName(@"Hide Cubed Item:")]
        public bool HideCubed { get; set; }
        [DisplayName(@"Hide Cubed Non-Seasonal Item:")]
        public bool HideCubedNonSeason { get; set; }
        [DisplayName(@"Hide Non-Seasonal Progress Bar:")]
        public bool NonSeasonalProgressBar { get; set; }
        [DisplayName(@"Hide Cubed Non-Seasonal Checkboxes:")]
        public bool HideNonSeasonalCheckboxes { get; set; }
        [DisplayName(@"Hide Cubed Seasonal Checkboxes:")]
        public bool HideSeasonalCheckboxes { get; set; }
        [DisplayName(@"Hide Seasonal Progress Bar:")]
        public bool SeasonalProgressBar { get; set; }
        [DisplayName(@"Hide Both Progress:")]
        public bool BothProgressBar { get; set; }
    }
}