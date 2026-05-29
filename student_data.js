

function saveStudentData()
{
    let stud_name=document.getElementById("fname").value; 
        localStorage.setItem("fname",stud_name);

    document.getElementById("stud_Name").innerHTML ="Student Name:" +
        localStorage.getItem("fname");

        let stud_mail=document.getElementById("gmail").value;
        localStorage.setItem("gmail",stud_mail);

        document.getElementById("stud_mail").innerHTML="student mail:"+
        localStorage.getItem("gmail");

        let stud_status=document.getElementById("status").value;
        localStorage.setItem("as",stud_status);

       document.getElementById("stud_status").innerHTML="Student Status:"+
        localStorage.getItem("as");
           
    
}