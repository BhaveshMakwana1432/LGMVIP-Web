function addStudent()
{
    console.log("its working")
    var name=document.getElementById("name").value;
    var rollno=document.getElementById("rollno").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var skills=document.getElementsByClassName('skills');
    var str='';
    for( i=0;i<skills.length;i++)
    {
        if(skills[i].checked)
        {
            str += skills[i].value+" ";
        }
    }

    var gender=document.getElementsByName("gender");
    var gender1="";
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked)
        {
            gender1=gender[i].value;
        }
    }

    
    
    var tr=document.createElement('tr');
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    var td5=tr.appendChild(document.createElement('td'));
    var td6=tr.appendChild(document.createElement('td'));
   


    td1.innerHTML=name;
    td2.innerHTML=rollno;
    td3.innerHTML=email;
    td4.innerHTML=phone;
    td5.innerHTML=gender1;
    td6.innerHTML=str;
   
    document.getElementById("t1").appendChild(tr);
}