using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CatMash.Controllers
{
    [Route("ext")]
    [ApiController]
    public class GatewayController : ControllerBase
    {
        private const string CatServerBaseUrl = "latelier.co";

        [HttpGet("root")]
        public async Task<string> ExternalApiProxy(string id)
        {
            var http = new HttpClient();
            var uriBuilder = new UriBuilder();
            uriBuilder.Scheme = "https";
            uriBuilder.Host = CatServerBaseUrl;
            uriBuilder.Path = string.Format("/data/{0}", id);
            var response =  await http.GetAsync(uriBuilder.Uri);
            return await response.Content.ReadAsStringAsync();
        }
    }
}