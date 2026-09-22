 function checktemperature(temperature)
 {
    let message="";

    if(temperature < 20)
    {
        message="cold";
    }
    else if(temperature >= 20 && temperature <=30)
    {
        message="normal";
    }
    else
    {
        message="hot";
    }

    return message;
}

console.log(checktemperature(15));
console.log(checktemperature(25));
console.log(checktemperature(32));
