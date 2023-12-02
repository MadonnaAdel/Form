
var inputName = document.querySelector("#fullName");
var inputNameError = document.querySelector('#fullNameError');
var passwor = document.querySelector("#password");
var repeatPassword = document.querySelector('#repeatPassword');
var passwordMatchError =document.querySelector('#passwordMatchError');
var regbtn = document.querySelector('#regester');


inputName.addEventListener('focus', function(){
  this.style.backgroundColor = 'red';
});

inputName.addEventListener('blur', function(){
  this.style.backgroundColor = 'white';
  
  var inputNameValue = inputName.value.trim();

if (inputNameValue.length < 3 || inputNameValue === '' || inputNameValue === Number ){
  inputNameError.textContent = 'the name is not Valid , pleas enter more than three caracter and do not write space only ';
  fullNameError.style.display = 'block';
  inputName.focus();
  inputName.select();
}
else{
  inputNameError.textContent = '';
};
});

repeatPassword.addEventListener('blur' , function(){

  var passwordValue = passwor.value.trim();
  var repeatPasswordValue = repeatPassword.value.trim();
  
  if (repeatPasswordValue !== passwordValue){
    passwordMatchError.textContent= 'Password and repeat password should be the same';
    passwordMatchError.style.display = 'block';
    repeatPassword.focus();
    repeatPassword.select();
  }
  else{
    passwordMatchError.textContent= '';
  };
});


function regestrWin (){
  var passwordValue = passwor.value.trim();
  var repeatPasswordValue = repeatPassword.value.trim();

  if (repeatPasswordValue == passwordValue ){
    var regeWin = window.open ('');
    regeWin.document.write('<h1>Thank you, for registering on our website</h1>');
  }
  else{
    alert("sorry you must valided forme frist");
  };
};
regbtn.addEventListener('click',regestrWin);