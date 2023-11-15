using Formula1Api.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<Formula1Context>(
   options => options.UseSqlite("Data Source=Databases/Formula1Db.db") 
);

//CORS-konfigurasjon:
// For at React-prosjektet vårt skal kobles med WebApi´et.
builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll",
        policies => policies
        .AllowAnyMethod() // GET, POST, PUT, DELETE
        .AllowAnyOrigin() 
        .AllowAnyHeader()
        );
    }
);

builder.Services.AddControllers();

// Configure Swagger/OpenAPI.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API", Version = "v1" });

    // Apply a filter to include only specific types (Driver, Race, and Team).
    c.DocumentFilter<IncludeOnlySpecificTypesFilter>();
});

var app = builder.Build();

app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
// Custom filter to include only specific types in Swagger documentation.
public class IncludeOnlySpecificTypesFilter : IDocumentFilter
{
    public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
    {
        // Get the names of types to include in Swagger.
        var includeTypes = new[] { "Driver", "Race", "Team", "Image" };

        // Remove paths (schemas) not related to included types.
        var pathsToRemove = swaggerDoc.Paths.Keys
            .Where(path => includeTypes.All(type => !path.Contains(type)))
            .ToList();

        foreach (var path in pathsToRemove)
        {
            swaggerDoc.Paths.Remove(path);
        }

        // Remove definitions (schemas) not related to included types.
        var definitionsToRemove = swaggerDoc.Components.Schemas.Keys
            .Where(schema => includeTypes.All(type => !schema.Contains(type)))
            .ToList();

        foreach (var definition in definitionsToRemove)
        {
            swaggerDoc.Components.Schemas.Remove(definition);
        }
    }
}
