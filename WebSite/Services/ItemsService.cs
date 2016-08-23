using System.Collections.Generic;
using System.Linq;
using WebSite.Model;
using WebSite.Repository;
using WebSite.ViewModelConverters;
using WebSite.ViewModels;

namespace WebSite.Services
{
    public class ItemsService
    {
        private readonly IItems _items;
        private readonly BaseItemViewModelConverter _baseItemViewModelConverter = new BaseItemViewModelConverter();
        public ItemsService()
        {
            _items = new JsonDeserializer().Deserializer();
        }

        public IEnumerable<BaseItemViewModel> GetAllWeapons()
        {
            return _items.Weapons.Select(_baseItemViewModelConverter.ConvertToViewModel);
        }


        public IEnumerable<BaseItemViewModel> GetAllJewelry()
        {
            return _items.Jewelry.Select(_baseItemViewModelConverter.ConvertToViewModel);
        }

        public IEnumerable<BaseItemViewModel> GetAllArmors()
        {
            return _items.Armors.Select(_baseItemViewModelConverter.ConvertToViewModel);
        }

        public ItemsViewModel GetAllSettings()
        {
            return new ItemsViewModel
            {
                Weapons = GetAllWeapons(),
                Armors = GetAllArmors(),
                Jewelry = GetAllJewelry(),
                BothProgressBar = _items.BothProgressBar,
                HideCubed = _items.HideCubed,
                HideCubedNonSeason = _items.HideCubedNonSeason,
                HideNonSeasonalCheckboxes = _items.HideNonSeasonalCheckboxes,
                HideSeasonalCheckboxes = _items.HideSeasonalCheckboxes,
                NonSeasonalProgressBar = _items.NonSeasonalProgressBar,
                SeasonalProgressBar = _items.SeasonalProgressBar
            };
        }
    }
}