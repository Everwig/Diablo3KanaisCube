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
    }
}