const username=document.querySelector('.username');
const email=document.querySelector('.email');
const password1=document.querySelector('.password1');
const password2=document.querySelector('.password2');

const submit=document.querySelector('.submit')

console.log(username);
console.log(email)
console.log(password1)
console.log(password2)
console.log(submit)

const usernameMessage=document.querySelector('.user-msg')
const emailMessage=document.querySelector('.email-msg')
const password1Message=document.querySelector('.password1-msg')
const password2Message=document.querySelector('.password2-msg')


submit.addEventListener("click", (e) => {
e.preventDefault();

if (username.value===''&& email.value ==='' && password1.value ==='' && password2.value ==='') {
       alert("please filed in all input");
}


if (username.value === ""){
    showMessage(usernameMessage,"please provide your name","red");
}
else{
    showMessage(usernameMessage,"GreatName","green")
}

if (email.value === ""){
    showMessage(emailMessage,"please provide your email","red");
}
else{
    showMessage(emailMessage,"Got your email","green")
}

if (password1.value === ""){
    showMessage(password1Message,"please provide your password","red");
}
else{
    showMessage(password1Message,"valid password","green")
}

if (password2.value === ""){
    showMessage(password2Message,"confirm your password","red");
}
else if (password1.value !== password2.value){
    showMessage(password2Message,"password do not match","red");
}
else{
    showMessage(password2Message,"Valid password","green")
}

});


function showMessage(element,msg,color) {
    element.style.visibility="visible";
    element.textContent=msg;
    element.style.color=color;
    element.previousElementSibling.style.border='2px solid ${color}';
}