function writeParagraph1(){
    var inputs = [];
    let result = "";
    for(let i = 1; i < 7; i++){
        inputs.push(document.getElementById("input" + i.toString()).value);
    }
    inputs.forEach(input => {
        var input1 = input + " ";
        result += input1;
    });

    document.getElementById("paragraph1").innerHTML = result;
}

function writeParagraph2(){
    var inputs = [];
    let result = "";
    for(let i = 7; i < 13; i++){
        inputs.push(document.getElementById("input" + i.toString()).value);
    }
    inputs.forEach(input => {
        var input1 = input + " ";
        result += input1;
    });

    document.getElementById("paragraph2").innerHTML = result;
}