namespace Formula1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Formula1Api.Models;
using Microsoft.EntityFrameworkCore;
using Formula1Api.Contexts;

[ApiController]
[Route("api/[controller]")]

public class TeamController : ControllerBase
{
private readonly Formula1Context context;
public TeamController(Formula1Context _context)
{
    context = _context;
}


[HttpGet]
public async Task<ActionResult<List<Team>>> Get()
{
    List<Team> teams = await context.Teams.ToListAsync();
    if (teams != null)
    {
        return Ok(teams);
    }
    else
    {
        return NotFound();
    }
}


[HttpGet("id/{id}")]
public async Task<ActionResult<List<Team>>> GetById(int id)
{
    try
    {
        Team? teams = await context.Teams.FindAsync(id);
        if (teams != null)
        {
            return Ok(teams);
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
[Route("manufacturer/{manufacturer}")]
public async Task<ActionResult<List<Team>>> GetByName(string manufacturer)
{
    try
    {
        Team? team = await context.Teams.FirstOrDefaultAsync(t => t.Manufacturer == manufacturer);
        if (team != null)
        {
            return Ok(team);
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


[HttpDelete("{manufacturer}")]
public async Task<ActionResult<TeamController>> DeleteByName(string manufacturer)
{
    try
    {
        Team? team = await context.Teams.FirstOrDefaultAsync(t => t.Manufacturer == manufacturer);

        if (team != null)
        {
            context.Teams.Remove(team);

            await context.SaveChangesAsync();

            return Ok(team);
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

[HttpPost]
public async Task<IActionResult> CreateTeam([FromBody] Team newTeam)
{
    try
    {
        context.Teams.Add(newTeam);

        await context.SaveChangesAsync();

        return Created($"/api/Team/{newTeam.Id}", newTeam);
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}

[HttpPut]
public async Task<IActionResult> Put(Team updatedTeam)
{
    try
    {
        Team? currentTeam = await context.Teams.FirstOrDefaultAsync(t => t.Id == updatedTeam.Id);

        if (currentTeam == null)
        {
            return NotFound();
        }

        currentTeam.Manufacturer = updatedTeam.Manufacturer;
        currentTeam.Image = updatedTeam.Image;
        currentTeam.Driver1 = updatedTeam.Driver1;
        currentTeam.Driver2 = updatedTeam.Driver2;

        await context.SaveChangesAsync();

        return NoContent();
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"Error: {ex.Message}");
    }
}

}