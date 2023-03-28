function action()
{
    var name=document.getElementById("name_id").value;
    var email=document.getElementById("email_id").value;
    var div=document.getElementById("div_id").value;
    if(!name || !email || !div)
    {
        alert("Please enter the current value !!");
    }
    else
    {
        //document.getElementById("witing").innerHTML=name;
        
        var tr=document.createElement("tr");
        var td1=tr.appendChild(document.createElement("td"));
        var td2=tr.appendChild(document.createElement("td"));
        var td3=tr.appendChild(document.createElement("td"));
        td1.innerHTML=name;
        td2.innerHTML=email;
        td3.innerHTML=div;
        document.getElementById("table1").appendChild(tr);

    }
    return;
}