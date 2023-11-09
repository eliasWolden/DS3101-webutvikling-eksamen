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

// Get all
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
public async Task<ActionResult<List<Driver>>> GetByName(string name)
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

// Get by Id:
// Using [Route]
[HttpGet]
[Route("id/{id}")]

public async Task<ActionResult<List<Driver>>> GetById(int id)
{
    try
    {
        Driver? drivers = await context.Drivers.FindAsync(id);
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

// Delete by name 
/* [HttpDelete("{name}")]
public async Task<ActionResult<List<Driver>>> DeleteByName(string name)
{
    
} */


// Create (image) (POST)


// Update (POST)
/* [HttpPost]
public IActionResult Post(Driver newDriver)
{
    Formula1Context.Driver.Add(newDriver);
    Formula1Context.SaveChanges();
    return Ok();
} */

}

