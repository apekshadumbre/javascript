

function saveStudentData()
{
    let stud_name=document.getElementById("fname").value; 
        localStorage.setItem("fname",stud_name);
    document.getElementById("stud_Name").innerHTML ="Student Name:" +
        localStorage.getItem("fname");
}