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

[HttpGet]
[Route("name/{name}")]
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


[HttpDelete("{name}")]
public async Task<ActionResult<Driver>> DeleteByName(string name)
{
    try
    {
        Driver? driver = await context.Drivers.FirstOrDefaultAsync(d => d.Name == name);

        if (driver != null)
        {
            context.Drivers.Remove(driver);

            await context.SaveChangesAsync();

            return Ok(driver);
        }
        else
        {
            return NotFound();
        }
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}


[HttpPost]
public async Task<IActionResult> CreateDriver(Driver newDriver)
{
    try
    {
        context.Drivers.Add(newDriver);

        await context.SaveChangesAsync();

        return Created($"/api/Driver/{newDriver.Id}", newDriver);
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}


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

        existingDriver.Name = updatedDriver.Name; 
        existingDriver.Age = updatedDriver.Age;   
        existingDriver.Nationality = updatedDriver.Nationality;   
        existingDriver.Image = updatedDriver.Image;   
        existingDriver.TeamId = updatedDriver.TeamId;   

        await context.SaveChangesAsync();

        return NoContent();
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}


}