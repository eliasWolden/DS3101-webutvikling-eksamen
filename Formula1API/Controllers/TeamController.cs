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

/* // Get by name
[HttpGet("name/{name}")]
public async Task<ActionResult<List<Team>>> GetByName(string name)
{
    try
    {
        Team? teams = await context.Teams.FindAsync(name);
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
 */
// Get by id
[HttpGet]
[Route("id/{id}")]

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
}