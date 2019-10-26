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

        [HttpGet("gateway")]
        /// <summary>
        /// This is an entry point for all external http request calls.
        /// This api is used to avoid cors policy errors.
        /// </summary>
        /// <param name="resource">The resource requested from the external server.</param>
        public async Task<string> ExternalApiProxy([FromQuery]string resource)
        {
            var httpClient = new HttpClient();
            var uriBuilder = new UriBuilder();
            uriBuilder.Scheme = "https";
            uriBuilder.Host = CatServerBaseUrl;
            uriBuilder.Path = string.Format("/data/{0}", resource);
            var response =  await httpClient.GetAsync(uriBuilder.Uri);
            return await response.Content.ReadAsStringAsync();
        }
    }
}