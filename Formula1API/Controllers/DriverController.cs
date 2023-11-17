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
// In order to be able to add Get methods beyond the standard Get (to retrieve all of something) and Get by id, we must use [Route]
public async Task<ActionResult<List<Driver>>> GetByName(string name)
{
    try
    {
        Driver? driver = await context.Drivers.FirstOrDefaultAsync(d => d.Name == name);
        
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
        Driver? driver = await context.Drivers.FirstOrDefaultAsync(d => d.Name == name);

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
        return StatusCode(500, $"Error: {ex.Message}");
    }
}



// Create Driver (POST)
[HttpPost]
public async Task<IActionResult> CreateDriver(Driver newDriver)
{
    try
    {
        // Add the new driver to the context
        context.Drivers.Add(newDriver);

        // Save changes to the database
        await context.SaveChangesAsync();

        // Return a 201 Created status with the newly created driver
        return Created($"/api/Driver/{newDriver.Id}", newDriver);
    }
    catch (Exception ex)
    {
        // If an exception occurs, return a 500 Internal Server Error with the exception message
        return StatusCode(500, $"Error: {ex.Message}");
    }
}


// Update (PUT)
[HttpPut]
public async Task<IActionResult> Put(Driver updatedDriver)
{
    try
    {
        Driver? existingDriver = await context.Drivers.FirstOrDefaultAsync(d => d.Id == updatedDriver.Id);

        if (existingDriver == null)
        {
            return NotFound();
        }

        await context.SaveChangesAsync();

        return NoContent();
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}


}