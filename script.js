
    function calculateAdd()
    {
        var value1 = parseInt(document.getElementById("value1").value);
        var value2 = parseInt(document.getElementById("value2").value);
        var result=value1 + value2;
        document.getElementById("result").innerHTML = result;
    }

    function calculateSub()
    {
        var value1 = parseInt(document.getElementById("value1").value);
        var value2 = parseInt(document.getElementById("value2").value);
        var result=value1 - value2;
        document.getElementById("result").innerHTML = result;
    }

    function calculateMult()
    {
        var value1=parseInt(document.getElementById("value1").value);
        var value2=parseInt(document.getElementById("value2").value);
        var result=value1 * value2;
        document.getElementById("result").innerHTML= result;
    }

    function calculateDiv()
    {
        var value1=parseInt(document.getElementById("value1").value);
        var value2 =parseInt(document.getElementById("value2").value);
        var result=value1 / value2;
        document.getElementById("result").innerHTML=result;
        
    }
