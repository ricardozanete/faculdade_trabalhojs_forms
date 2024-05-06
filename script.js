const form = document.getElementById('form')
const username =document.getElementById('username')
const email = document.getElementById('email')
const password =document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    checkForm()

}
)
    
username.addEventListener("focusout", () =>{
    checkInputUsername()
})

email.addEventListener("focusout", () =>{
    checkInputEmail()
})

const checkInputUsername = () =>{
    const usernameValue = username.value;
    if(usernameValue ===""){
        errorInput(username, "Preencha o nome de usuario !")
        // alert("Please enter your name");
    }else{
        const formItem = username. parentElement;
        formItem.className = 'form-content'
    }
}

const checkInputEmail = () => {
    const emailValue = email.value;
    if (emailValue ==="") {
        errorInput(email, "Preencha com seu E-mail !")

    }else{
        const formItem = email.parentElement;
        formItem.className = 'form-content'
    }
}

const validatePassword = ()=>{
    const passwordValue= password.value;
   if(passwordValue === ""){
    errorInput(password,"Insira a senha!")
    } else if(passwordValue.length < 6){
        errorInput(password, "A senha deve ter no mínimo 6 caracteres.")
        }else{
            const formItem = password.parentElement;
            formItem.className='form-content';
        }
  
}

const confirmationPassword =() =>{
    const passwordConfirmationValue = passwordConfirmation.value;
   const passwordValue = password.value;
   if (passwordConfirmationValue === "") {
    errorInput(passwordConfirmation, " A comfirmação de senha é obrigatoria !")
    
   }else if (passwordConfirmationValue !== passwordValue) {
    errorInput(passwordConfirmation, " As senhas não são identicas")
    
   }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = 'form-content'
   }
}

const checkForm = () => {
    checkInputUsername()
checkInputEmail()
validatePassword()
confirmationPassword()

const formItems = form.querySelectorAll('.form-content')
const isValid = [...formItems].every((item)=>{
    return item.className === 'form-content'
});

if(isValid){
    alert('Cadastro realizado com sucesso');
}else{
    alert('Preencha todos os campos!')
}

}

const errorInput = (input, message) =>{
     const formItem = input.parentElement;
     const textMessage = formItem.querySelector('small')

     textMessage.innerText = message;
     formItem.className = 'form-content error'
}
