namespace Formula1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1Api.Models;
using Microsoft.EntityFrameworkCore;
using Formula1Api.Contexts;

[ApiController]
[Route("api/[controller]")]

public class RaceController : ControllerBase
{
private readonly Formula1Context context;
public RaceController(Formula1Context _context)
{
    context = _context;
}

// Get all
[HttpGet]
public async Task<ActionResult<List<Race>>> Get()
{
    try
    {
        List<Race> races = await context.Races.ToListAsync();
        if (races != null)
        {
            return Ok(races);
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


//Get by Id:
[HttpGet("id/{id}")]

public async Task<ActionResult<List<Race>>> GetById(int id)
{
    try
    {
        Race? races = await context.Races.FindAsync(id);
        if (races != null)
        {
            return Ok(races);
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
[Route("grandPrix/{grandPrix}")]
public async Task<ActionResult<List<Race>>> GetByName(string grandPrix)
{
    try
    {
        Race race = await context.Races.FirstOrDefaultAsync(r => r.GrandPrix == grandPrix);
        if (race != null)
        {
            return Ok(race);
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
[HttpDelete("{grandPrix}")]
public async Task<ActionResult<Race>> DeleteByName(string grandPrix)
{
    try
    {
        // Find the driver by name
        Race race = await context.Races.FirstOrDefaultAsync(r => r.GrandPrix == grandPrix);

        if (race != null)
        {
            // Remove the driver from the context
            context.Races.Remove(race);

            // Save changes to the database
            await context.SaveChangesAsync();

            // Return the deleted driver
            return Ok(race);
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


// Create Race (POST)
[HttpPost]
public async Task<IActionResult> CreateRace([FromBody] Race newRace)
//The [FromBody] attribute tells ASP.NET Core to deserialize this JSON data into a Driver object and bind it to the newDriver parameter
{
    try
    {
        // Add the new driver to the context
        context.Races.Add(newRace);

        // Save changes to the database
        await context.SaveChangesAsync();

        // Return a 201 Created status with the newly created driver
        return Created($"/api/Race/{newRace.Id}", newRace);
    }
    catch (Exception ex)
    {
        // If an exception occurs, return a 500 Internal Server Error with the exception message
        return StatusCode(500, $"Error: {ex.Message}");
    }
}

// Update (PUT)
[HttpPut]
public async Task<ActionResult<Race>> UpdateRace(Race updatedRace)
{
    try
    {
        // Find the existing driver by ID
        Race currentRace = await context.Races.FindAsync();

        if (currentRace == null)
        {
            // If the driver with the given ID is not found, return a 404 Not Found response
            return NotFound();
        }

        // Update the properties of the existing driver with the values from the updatedDriver
        currentRace.GrandPrix = updatedRace.GrandPrix;
        //existingDriver.Team = updatedDriver.Team;
        // Update other properties as needed

        // Save changes to the database
        await context.SaveChangesAsync();

        // Return the updated driver along with a 200 OK status
        return Ok(currentRace);
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}
}
