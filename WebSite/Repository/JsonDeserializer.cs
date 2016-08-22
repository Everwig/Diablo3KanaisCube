using System;
using System.IO;
using System.Runtime.Versioning;
using System.Web.Hosting;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using WebSite.Model;

namespace WebSite.Repository
{
    public class JsonDeserializer
    {   
        public IItems Deserializer()
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
