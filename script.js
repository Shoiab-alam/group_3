'use strict';

const change = document.querySelectorAll('.change');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const loginForm = document.querySelector('.login-form');
const overlay = document.querySelector('.overlay');
const sign = document.querySelector('.sign');
const forgot = document.querySelector('.forgot');
const forget = document.querySelector('.forget');
const confirmPassword = document.querySelector('.confirm-password');
const conPassword = document.querySelector('.conPassword');
const first = document.querySelector('.first');
const last = document.querySelector('.last');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const lastBox = document.querySelector('.last-box');
const createBtn = document.querySelector('.createBtn');
const welcome = document.querySelector('.welcome');
const open = document.querySelector('.open');
const smallLogin = document.querySelector('.small-login');
const pencil = document.querySelector('.pencil');
const by = document.querySelector('.by');

change.forEach((item) =>  item.addEventListener('click', function() {
    change.forEach((a) => a.classList.remove('active'));
    item.classList.add('active');
  }));


  popup.addEventListener('click',()=> { 
    loginForm.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('body').style.overflow = 'hidden';
}
);

  close.addEventListener('click', () => {
    loginForm.classList.add('hidden')
    overlay.classList.add('hidden');
    document.querySelector('body').style.overflow = 'auto';    
})


sign.addEventListener('click', function(){
    if(sign.innerHTML === 'Sign in'){
    forgot.classList.remove('hidden');
    confirmPassword.classList.add('hidden');
    first.classList.add('hidden');
    last.classList.add('hidden');
    sign.textContent = 'Create Account';
}else if(sign.innerHTML == 'Create Account'){
    forgot.classList.add('hidden');
    confirmPassword.classList.remove('hidden');
    first.classList.remove('hidden');
    last.classList.remove('hidden');
    sign.textContent = 'Sign in';
}
})
lastBox.addEventListener('click', function(e){
    e.preventDefault();
    if(lastBox.innerHTML === 'or, Sign In'){
      lastBox.textContent = 'or, Create Account';
      createBtn.textContent = 'Sign In';
      welcome.textContent = 'Welcome Back';
      firstName.classList.add('hidden');
      lastName.classList.add('hidden');
      conPassword.classList.add('hidden');
      by.classList.add('hidden');
      forget.classList.remove('hidden');
    }else if(lastBox.innerHTML === 'or, Create Account'){
      lastBox.textContent = 'or, Sign In';
      createBtn.textContent = 'Create Account';
      welcome.textContent = 'Create Account';
      firstName.classList.remove('hidden');
      lastName.classList.remove('hidden');
      conPassword.classList.remove('hidden');
      by.classList.remove('hidden');
      forget.classList.add('hidden');

    }
})

document.querySelector('.close2').addEventListener('click', function(){
  smallLogin.style.display = 'none';
  document.querySelector('body').style.overflow = 'auto';
  document.querySelector('.close2').style.cursor = 'pointer';
})

document.querySelector('.open').addEventListener('click', function(){
  smallLogin.style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
})
