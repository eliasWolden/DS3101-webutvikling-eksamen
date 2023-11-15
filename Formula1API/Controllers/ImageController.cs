namespace Formula1Api.Controllers;

using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("api/[controller]")]
public class ImageController : ControllerBase
{
private readonly IWebHostEnvironment hosting;

public ImageController(IWebHostEnvironment _hosting)
{
hosting = _hosting;
}


// Get image by imageType ("driver","race", "emblem", "car") and imageName.
[HttpGet("{imageType}/{imageName}")]
    public IActionResult GetImage(string imageType, string imageName)
    {
        try
        {
        string subfolder = GetSubfolder(imageType);
        if (subfolder == null)
            return NotFound("Invalid image type.");

        return GetImageFromFile(imageName, subfolder);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    private string GetSubfolder(string imageType)
    {
        try
        {
        switch (imageType.ToLower())
        {
            case "driver":
                return "Drivers";
        
            case "race":
                return "Races";

            case "emblem":
                return "Emblems";

            case "car":
                return "Cars";
            
            default: 
            throw new ArgumentException("Not found");
        }
        
        }
        catch (ArgumentException)
        {
            throw;
        }
    }

    private IActionResult GetImageFromFile(string imageName, string subfolder)
    {
        try
        {
            if (subfolder == null)
                return BadRequest("Invalid image type.");

            string webRootPath = hosting.WebRootPath;
            string imagePath = Path.Combine(webRootPath, "images", subfolder, imageName);

            if (System.IO.File.Exists(imagePath))
            {
                var imageBytes = System.IO.File.ReadAllBytes(imagePath);
                return File(imageBytes, "image/png");
            }

            return NotFound();
        }
        catch (Exception)
        {
            return StatusCode(500);
        }
    }


// Post an image
[HttpPost]

public IActionResult SaveImage(IFormFile file)
{
    string webRootPath = hosting.WebRootPath;
    string absolutePath = Path.Combine($"{webRootPath}/images/Drivers/{file.FileName}");

    using(var fileStream = new FileStream(absolutePath, FileMode.Create))
    {
        file.CopyTo(fileStream);
    }

    return Ok();
}
 
// Delete an image
//[HttpDelete]
}
