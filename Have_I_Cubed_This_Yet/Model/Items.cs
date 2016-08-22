using System.Collections.Generic;

namespace Have_I_Cubed_This_Yet.Model
{
    public class Items : IItems
    {
        public IEnumerable<BaseItem> Weapons { get; set; }
        public IEnumerable<BaseItem> Armors { get; set; }
        public IEnumerable<BaseItem> Jewelry { get; set; }
        public bool HideCubed { get; set; }
        public bool HideCubedNonSeason { get; set; }
        public bool NonSeasonalProgressBar { get; set; }
        public bool HideNonSeasonalCheckboxes { get; set; }
        public bool HideSeasonalCheckboxes { get; set; }
        public bool SeasonalProgressBar { get; set; }
        public bool BothProgressBar { get; set; }
    }
}
