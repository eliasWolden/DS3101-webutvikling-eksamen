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


//Get by id
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

// Get by grandprix
[HttpGet]
[Route("grandPrix/{grandPrix}")]
public async Task<ActionResult<List<Race>>> GetByName(string grandPrix)
{
    try
    {
        Race? race = await context.Races.FirstOrDefaultAsync(r => r.GrandPrix == grandPrix);
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


// Delete
[HttpDelete("{id}")]
public async Task<ActionResult<Race>> DeleteById(int id)
{
    try
    {
        Race? race = await context.Races.FirstOrDefaultAsync(r => r.Id == id);

        if (race != null)
        {
            context.Races.Remove(race);

            await context.SaveChangesAsync();

            return Ok(race);
        }
        else
        {
            return NotFound();
        }
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Internal Server Error: {ex.Message}");
    }
}


// Post
[HttpPost]
public async Task<IActionResult> CreateRace([FromBody] Race newRace)
{
    try
    {
        context.Races.Add(newRace);

        await context.SaveChangesAsync();

        return Created($"/api/Race/{newRace.Id}", newRace);
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}

// Put
[HttpPut]
public async Task<IActionResult> Put(Race updatedRace)
{
    try
    {
        Race? currentRace = await context.Races.FirstOrDefaultAsync(r => r.Id == updatedRace.Id);

        if (currentRace == null)
        {
            return NotFound();
        }

        currentRace.WinnerName = updatedRace.WinnerName;
        currentRace.WinnerTime = updatedRace.WinnerTime;
        currentRace.GrandPrix = updatedRace.GrandPrix;
        currentRace.NumberOfLaps = updatedRace.NumberOfLaps;
        currentRace.Image = updatedRace.Image;

        await context.SaveChangesAsync();

        return NoContent();
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}
}
