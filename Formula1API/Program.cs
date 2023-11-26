using Formula1Api.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<Formula1Context>(
   options => options.UseSqlite("Data Source=Databases/Formula1Db.db") 
);

builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll",
        policies => policies
        .AllowAnyMethod() 
        .AllowAnyOrigin() 
        .AllowAnyHeader()
        );
    }
);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API", Version = "v1" });

    c.DocumentFilter<IncludeOnlySpecificTypesFilter>();
});

var app = builder.Build();

app.UseStaticFiles();

app.UseCors("AllowAll");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
public class IncludeOnlySpecificTypesFilter : IDocumentFilter
{
    public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
    {
        var includeTypes = new[] { "Driver", "Race", "Team", "Image" };

        var pathsToRemove = swaggerDoc.Paths.Keys
            .Where(path => includeTypes.All(type => !path.Contains(type)))
            .ToList();

        foreach (var path in pathsToRemove)
        {
            swaggerDoc.Paths.Remove(path);
        }

        var definitionsToRemove = swaggerDoc.Components.Schemas.Keys
            .Where(schema => includeTypes.All(type => !schema.Contains(type)))
            .ToList();

        foreach (var definition in definitionsToRemove)
        {
            swaggerDoc.Components.Schemas.Remove(definition);
        }
    }
}
