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


// Get by Id:
[HttpGet("id/{id}")]

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

// Get by name
[HttpGet]
[Route("name/{name}")]
// In order to be able to add Get methods beyond the standard Get (to retrieve all of something) and Get by id, one must use [Route]
public async Task<ActionResult<List<Driver>>> GetByName(string name)
{
    try
    {
        Driver driver = await context.Drivers.FirstOrDefaultAsync(d => d.Name == name);
        
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


// Delete by name 
[HttpDelete("{name}")]
public async Task<ActionResult<Driver>> DeleteByName(string name)
{
    try
    {
        // Find the driver by name
        Driver driver = await context.Drivers.FirstOrDefaultAsync(d => d.Name == name);

        if (driver != null)
        {
            // Remove the driver from the context
            context.Drivers.Remove(driver);

            // Save changes to the database
            await context.SaveChangesAsync();

            // Return the deleted driver
            return Ok(driver);
        }
        else
        {
            return NotFound();
        }
    }
    catch (Exception ex)
    {
        // If an exception occurs, return a 500 Internal Server Error with the exception message
        return StatusCode(500, $"Internal Server Error: {ex.Message}");
    }
}



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

