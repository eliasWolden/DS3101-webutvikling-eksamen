using Microsoft.AspNetCore.Mvc;

namespace SeriesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImageUploadController : ControllerBase
    {
        private readonly IWebHostEnvironment _environment;

        public ImageUploadController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        [HttpPost]
        public IActionResult PostImage(IFormFile formFile)
        {
            try
            {
                if (formFile == null || formFile.Length == 0)
                    return BadRequest();

                string webRootPath = _environment.WebRootPath;
                string imagePath = Path.Combine(webRootPath, "photos", "driver-photos", formFile.FileName);
                Directory.CreateDirectory(Path.GetDirectoryName(imagePath));

                using (var fileStream = new FileStream(imagePath, FileMode.Create))
                    formFile.CopyTo(fileStream);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }

        [HttpGet("{imageName}")]
        public IActionResult GetImage(string imageName)
        {
            try
            {
                string webRootPath = _environment.WebRootPath;
                string imagePath = Path.Combine(webRootPath, "photos", "driver-photos", imageName);

                if (System.IO.File.Exists(imagePath))
                {
                    var imageBytes = System.IO.File.ReadAllBytes(imagePath);
                    return File(imageBytes, "image/png"); // You might need to adjust the content type based on the image format
                }

                return NotFound();
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }
    }
}