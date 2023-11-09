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

/* [HttpDelete]
public async Task<ActionResult<List<Race>>> Delete()
{
   List<Race> races = await context.Races. 
} */



}