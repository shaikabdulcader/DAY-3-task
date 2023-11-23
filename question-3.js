//display all country names, regions, sub-region, populations in the console
var input = new XMLHttpRequest();
input.open("GET", "https://restcountries.com/v3.1/all");
input.send();
input.onload = function(){
    var output = JSON.parse(input.response);
    console.log(output);
    for (var i=0; i<output.length; i++){
        var countryName = output[i].name.common;
        var regions = output[i].region;
        var subregion = output[i].subregion;
        var population = output[i].population;

        console.log(countryName);
        console.log(regions);
        console.log(subregion);
        console.log(population);
    }
}

