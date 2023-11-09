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

// Get by name
[HttpGet("name/{name}")]
public async Task<ActionResult<List<Race>>> GetByName(string name)
{
    try
    {
        Race? races = await context.Races.FindAsync(name);
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
[HttpGet]
[Route("id/{id}")]

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


}
