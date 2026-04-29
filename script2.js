function calculate(operation)
{
    let value1=Number(document.getElementById("value1").value);
    let value2=Number(document.getElementById("value2").value);
    let result;

    if(operation ==='+')
    {
        result=value1 + value2;
    }
    else if(operation ==='-')
    {
        result=value1-value2;
    }
    else if(operation ==='*'){
        result= value1 * value2;
        }
        else if(opearion ==='/')
            if(value2== 0)
            {
                result="Error: Division by zero is not allowed.";
            }
            else{
                result=value1/value2;
            }
   document.getElementById("result").innerHTML=result;
}  

