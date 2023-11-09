using Microsoft.AspNetCore.Mvc;

namespace Formula1Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImageUploadController : ControllerBase
    {
        private readonly IWebHostEnvironment environment;

        public ImageUploadController(IWebHostEnvironment _environment)
        {
            environment = _environment;
        }

        [HttpPost]
        public IActionResult PostImage(IFormFile formfile)
        {
            try
            {
                string webRootPath = environment.WebRootPath;
                string absolutePath = Path.Combine($"{webRootPath}/images/{formfile.FileName}");

                using (var fileStream = new FileStream(absolutePath, FileMode.Create))
                {
                    formfile.CopyTo(fileStream);
                }

                return Ok();
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}
