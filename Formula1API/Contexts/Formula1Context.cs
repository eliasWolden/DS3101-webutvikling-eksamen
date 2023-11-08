namespace Formula1Api.Contexts;
using Formula1Api.Models;
using Microsoft.EntityFrameworkCore;
public class Formula1Context : DbContext
{
// Constructor:
public Formula1Context(DbContextOptions<Formula1Context> options):base(options){}

// Class we want a table of in our database:
public DbSet<Driver> Drivers {get; set;}
public DbSet<Race> Races {get; set;}
public DbSet<Team> Teams {get; set;}
}