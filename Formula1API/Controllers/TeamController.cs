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
}