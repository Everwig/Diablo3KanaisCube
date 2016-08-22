using System.Collections.Generic;

namespace WebSite.Model
{
    public interface IItems
    {
        IEnumerable<BaseItem> Armors { get; set; }
        bool BothProgressBar { get; set; }
        bool HideCubed { get; set; }
        bool HideCubedNonSeason { get; set; }
        bool HideNonSeasonalCheckboxes { get; set; }
        bool HideSeasonalCheckboxes { get; set; }
        IEnumerable<BaseItem> Jewelry { get; set; }
        bool NonSeasonalProgressBar { get; set; }
        bool SeasonalProgressBar { get; set; }
        IEnumerable<BaseItem> Weapons { get; set; }
    }
}