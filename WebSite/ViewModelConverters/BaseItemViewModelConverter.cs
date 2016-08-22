using System.Collections.Generic;
using WebSite.Model;
using WebSite.ViewModels;

namespace WebSite.ViewModelConverters
{
    public class BaseItemViewModelConverter
    {
        public BaseItemViewModel ConvertToViewModel(IBaseItem baseItem)
        {
            return new BaseItemViewModel()
            {
                ItemName = baseItem.ItemName,
                Affix = baseItem.Affix,
                IsCubedNonSeason = baseItem.IsCubedNonSeason,
                IsCubedSeason = baseItem.IsCubedSeason,
                IsStashed = baseItem.IsStashed
            };
        }
    }
}