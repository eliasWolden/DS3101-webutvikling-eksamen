using Formula1Api.Contexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<Formula1Context>(
   options => options.UseSqlite("Data Source=Databases/Formula1Db.db") 
);

//CORS-konfigurasjon:
// For at React-rposjektet vårt skal kobles med WebApi´et.
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
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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
