const nombre = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const warnings = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let error = ""
    let errors = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    warnings.innerHTML = ""
    if(nombre.value === null || nombre.value === ''){
        error += "Enter your name. <br>"
        errors = true
    }

    if(!regexEmail.test(email.value) || email.value === ''){
        error += "Enter a valid email. <br>"
        errors = true
    }
    
    if(message.value === ''){
        error += "Message can not be empty. <br>"
        errors = true
    }

    if(errors){
        warnings.innerHTML = error
    }else{
        sendMail()
    }
})

function sendMail(params) {
var templateParams = {
    to_name: 'Agustin',
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    message: document.getElementById("message").value
};
 
emailjs.send('service_vgvro59', 'template_nkpe9p9', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       warnings.innerHTML = 'SUCCESS!'
    }, function(error) {
       console.log('FAILED...', error);
       warnings.innerHTML = 'FAILED...'
    });
}