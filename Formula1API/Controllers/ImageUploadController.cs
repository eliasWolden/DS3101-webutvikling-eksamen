/* namespace Formula1Api.Controllers;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]

public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment environment;

    public ImageUploadController(IWebHostEnvironment _environment)
    {
        environment = _environment;
    }

    //bildeuthenting:
    [HttpPost]
    public IActionResult PostImage(IFormFile formfile)
    {
        string webRootPath = environment.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{formFile.FileName}");

        using(var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            formFile.CopyTo(fileStream);
        }

        return Ok();
    }
} */