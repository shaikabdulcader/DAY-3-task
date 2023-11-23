//display all the country flags in the console
var input = new XMLHttpRequest();
input.open("GET", "https://restcountries.com/v3.1/all");
input.send();
input.onload = function(){
    var output = JSON.parse(input.response);
    console.log(output);
    for (var i=0; i<output.length; i++){
        var countryFlags = output[i].flag;
        console.log(countryFlags);
    }
}

