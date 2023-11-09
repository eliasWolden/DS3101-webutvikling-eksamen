namespace Formula1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1Api.Models;
using Microsoft.EntityFrameworkCore;
using Formula1Api.Contexts;

[ApiController]
[Route("api/[controller]")]

public class DriverController : ControllerBase
{
private readonly Formula1Context context;
public DriverController(Formula1Context _context)
{
    context = _context;
}

// GetAll
[HttpGet]
public async Task<ActionResult<List<Driver>>> Get()
{
    try
    {
    List<Driver> drivers = await context.Drivers.ToListAsync();
    if (drivers != null)
    {
        return Ok(drivers);
    }
    else
    {
        return NotFound();
    }
    }
    catch
    {
        return StatusCode(500);
    }
}

// Get by name
[HttpGet("name/{name}")]
public async Task<ActionResult<List<Driver>>> GetById(string name)
{
    try
    {
        Driver? drivers = await context.Drivers.FindAsync(name);
        if (drivers != null)
        {
            return Ok(drivers);
        }
        else
        {
            return NotFound();
        }
    }
    catch
    {
        return StatusCode(500);
    }

}
[HttpGet]
[Route("id/{id}")]
public async Task<ActionResult<List<Driver>>> GetById(int id)
{
    try
    {
        Driver? driver = await context.Drivers.FindAsync(id);
        if (driver != null)
        {
            return Ok(driver);
        }
        else
        {
            return NotFound();
        }
    }
    catch
    {
        return StatusCode(500);
    }
}

}