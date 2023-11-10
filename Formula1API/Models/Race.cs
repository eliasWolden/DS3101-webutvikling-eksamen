namespace Formula1Api.Models;

using Formula1Api.Interfaces;

public class Race : IRace
{
    public int Id {get; set;}
    public string? WinnerName {get; set;}
    public int WinnerTime {get; set;}
    public string? GrandPrix {get; set;}
    public int NumberOfLaps {get; set;}
    public string? Image {get; set;}

}