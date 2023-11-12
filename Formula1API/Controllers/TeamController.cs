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

// Get all
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



// Get by id
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


// Get by name
[HttpGet]
[Route("manufacturer/{manufacturer}")]
public async Task<ActionResult<List<Team>>> GetByName(string manufacturer)
{
    try
    {
        Team team = await context.Teams.FirstOrDefaultAsync(t => t.Manufacturer == manufacturer);
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


// Delete by name 
[HttpDelete("{manufacturer}")]
public async Task<ActionResult<TeamController>> DeleteByName(string manufacturer)
{
    try
    {
        // Find the driver by name
        Team team = await context.Teams.FirstOrDefaultAsync(t => t.Manufacturer == manufacturer);

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


}