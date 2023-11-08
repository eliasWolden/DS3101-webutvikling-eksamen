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

/* 
[HttpGet("{id}")]
public async Task<ActionResult<List<Driver>>> GetById(int id)
{
    List<Driver> drivers = await context.Drivers.FindAsync(id);
     if (drivers != null)
     {
        return Ok(drivers);
     }
     else
     {
        return NotFound();
     }
} */
}