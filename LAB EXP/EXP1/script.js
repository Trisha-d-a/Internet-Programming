function login(){

let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

if(user=="" || pass=="")
{
alert("Enter Username and Password");
return false;
}

alert("Login Successful");

}

function register(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name=="" || email=="")
{
alert("Fill all fields");
return false;
}

alert("Registration Successful");

}

function searchBook(){

let book=document.getElementById("book").value;

if(book=="")
alert("Enter Book Name");
else
alert("Searching for "+book);

}