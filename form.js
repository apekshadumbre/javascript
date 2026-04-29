

         // select elements by matching id and input the value from user and store it in variable
          function saveData() 
          {
            
            let name = document.getElementById("fname").value;
            let mail=document.getElementById("email").value;
            let pwd=document.getElementById("password").value;
            let showage=parseInt(document.getElementById("age").value);
            let date=document.getElementById("date").value;
            let phone=document.getElementById("phone").value;
            let gender=document.querySelector('input[name="gender"]:checked');
            gender=gender?gender.value:"";
            
            let subjects=[];
            let checkboxes=document.querySelectorAll('input[type=checkbox]:checked');
            checkboxes.forEach(checkbox=>
                {
                subjects.push(checkbox.value);

               }
        );


            // store the values in localstorage
             localStorage.setItem("fname",name);
             localStorage.setItem("gmail",mail);
             localStorage.setItem("password",pwd);
             localStorage.setItem("age",showage);
             localStorage.setItem("date",date);
             localStorage.setItem("phone",phone);
             localStorage.setItem("gender",gender);
             localStorage.setItem("subjects",JSON.stringify(subjects));




        }

        

          



function validateForm()
{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let emailError=document.getElementById("emailError");
    let passError=document.getElementById("passError");

    emailError.innerHTML="";
    passError.innerHTML="";

    let isValid=true;

    if(email==="")
    {
        emailError.innerHTML="Email required";
        
    }
    else if(!email.includes("@"))
    {
        emailError.innerHTML="Invalid Email";
        
    }

    if(password ==="")
    {
        passError.innerHTML="password required";
        isValid=false;
    }
    else if(password.length<6)
    {
        passError.innerHTML="max 8 characters required";
         isValid=false;
    }
    else if(password.length>8)
    {
        passError.innerHTML="min 6 characters required";
         isValid=false;
    }
    

    return isValid;
    
}