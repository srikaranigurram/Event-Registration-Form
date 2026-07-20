function togglePassword(id, btn){

const input = document.getElementById(id);

if(input.type==="password"){

input.type="text";

btn.innerHTML="🙈";

}

else{

input.type="password";

btn.innerHTML="👁";

}

}

const signupForm=document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("Passwords do not match!");

return;

}

const user={

name,

email,

password

};

localStorage.setItem(email,JSON.stringify(user));

alert("Registration Successful!");

window.location.href="index.html";

});

}

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value;

const password=document.getElementById("loginPassword").value;

const user=JSON.parse(localStorage.getItem(email));

if(user && user.password===password){

alert("Login Successful!\nWelcome "+user.name);

}

else{

alert("Invalid Email or Password");

}

});

}