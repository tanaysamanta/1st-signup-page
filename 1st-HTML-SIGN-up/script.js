const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

const name=document.getElementById('Name');
const email=document.getElementById('email');
const passord=document.getElementById('password');
const form=document.getElementById('form');
const errorElement=document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages=[]
  if(Name.value ==='' || Name.value == null){
    messages.push('Name is required')
  }
  if(password.value.length <= 6){
    messages.push('Password must be longer than 6 chareacters')
  }
  if(messages.length>0){
    e.preventDefault()
    errorElement.innerText=messages.join(',')

  }
  
})