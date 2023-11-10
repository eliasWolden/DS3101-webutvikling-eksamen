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

        [HttpPost("driver")]
        public IActionResult PostDriverImage(IFormFile formFile)
        {
            return PostImage(formFile, "Drivers");
        }

        [HttpGet("driver/{imageName}")]
        public IActionResult GetDriverImage(string imageName)
        {
            return GetImage(imageName, "Drivers");
        }

        [HttpPost("race")]
        public IActionResult PostRaceImage(IFormFile formFile)
        {
            return PostImage(formFile, "Races");
        }

        [HttpGet("race/{imageName}")]
        public IActionResult GetRaceImage(string imageName)
        {
            return GetImage(imageName, "Races");
        }

        private IActionResult PostImage(IFormFile formFile, string subfolder)
        {
            try
            {
                if (formFile == null || formFile.Length == 0)
                    return BadRequest();

                string webRootPath = _environment.WebRootPath;
                string imagePath = Path.Combine(webRootPath, "images", subfolder, formFile.FileName);
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

        private IActionResult GetImage(string imageName, string subfolder)
        {
            try
            {
                string webRootPath = _environment.WebRootPath;
                string imagePath = Path.Combine(webRootPath, "images", subfolder, imageName);

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
