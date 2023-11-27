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

// Get
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


// Post
[HttpPost("{subfolder}/")]
public IActionResult SaveImage(IFormFile file, string subfolder)
{
    try {
    string webRootPath = hosting.WebRootPath;
    string absolutePath = Path.Combine(webRootPath, "images", subfolder, file.FileName);


    using(var fileStream = new FileStream(absolutePath, FileMode.Create))
    {
        file.CopyTo(fileStream);
    }

    return Ok();
    }
    catch {
        return StatusCode(500);
    }
}
 
 
// Delete
[HttpDelete("{imageName}")]
public IActionResult DeleteImage(string imageName)
{
    try
    {
        string webRootPath = hosting.WebRootPath;
        string imagePath = Path.Combine(webRootPath, "images", "Drivers", imageName);

        if (System.IO.File.Exists(imagePath))
        {
            System.IO.File.Delete(imagePath);
            return Ok();
        }

        return NotFound("Image not found");
    }
    catch (Exception)
    {
        return StatusCode(500);
    }
}
}
