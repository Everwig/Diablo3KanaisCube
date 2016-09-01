using System;
using System.IO;
using System.Web.Hosting;
using Newtonsoft.Json;
using WebSite.Model;

namespace WebSite.Repository
{
    public class Deserializer
    {   
        public IItems JsonDeserializer()
        {   
            try
            {
                using (var fileStream = new FileStream(HostingEnvironment.MapPath(RepositorySettings.ItemList), FileMode.Open))
                using (var streamReader = new StreamReader(fileStream))
                using (var jsonReader = new JsonTextReader(streamReader))
                {
                    var jsonSerializer = new JsonSerializer();
                    IItems list = jsonSerializer.Deserialize<Items>(jsonReader);
                    return list;
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
