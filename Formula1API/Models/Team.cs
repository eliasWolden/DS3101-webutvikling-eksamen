namespace Formula1Api.Models;
using Formula1Api.Interfaces;
public class Team : ITeam
{
    public int Id {get; set;}
    public string? Manufacturer {get; set;}
    public string? Image {get; set;}
    public string? Driver1 {get; set;}
    public string? Driver2 {get; set;}
}