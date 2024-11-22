
 const createBtn = document.getElementById('create-Btn');
 const logBtn = document.getElementById('log-Btn');
 const loginForm = document.getElementById('login-form');
 const createForm = document.getElementById('create-form');


 createBtn.addEventListener('click', () => {
   loginForm.style.display = 'none'; 
   createForm.style.display = 'block'; 
   });

 logBtn.addEventListener('click', () => {
   createForm.style.display = 'none'; 
   loginForm.style.display = 'block';
 });