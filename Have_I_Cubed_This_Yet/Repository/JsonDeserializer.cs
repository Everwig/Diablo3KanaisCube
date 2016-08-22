using System;
using System.IO;
using Have_I_Cubed_This_Yet.Model;
using Newtonsoft.Json;

namespace Have_I_Cubed_This_Yet.Repository
{
    public class JsonDeserializer
    {   
        public IItems Deserializer()
        {
            const string loc = @"C:\Users\Gabor_Porteleki\Documents\Visual Studio 2015\Projects\Have_I_Cubed_This_Yet\Have_I_Cubed_This_Yet\bin\Debug\Repository\2.4.json";

            try
            {
                using (var fileStream = new FileStream(loc, FileMode.Open))
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
