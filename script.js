const form = document.getElementById('form');
const mailinput = document.getElementById ('mailinput');

form.addEventListener('submit', e=> {
    e.preventDefault ();
    validateInput ();
})



const setError = (element, message) => {
    const email = element.parentElement ;
    const errorDisplay = email.querySelector ('.error');

    errorDisplay.InnerText = message ;
    email.classList.add('error');
    email.classList.remove('success');
}

const setSuccess = (element) => {
    const email = element.parentElement ;
    const errorDisplay = email.querySelector ('.error');

    errorDisplay.InnerText = '' ;
    email.classList.remove('error');
    email.classList.add('success');
}


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInput = () => {
    const mailinputValue = mailinput.value.trim ();
    
    if (mailinputValue === '') {
        setError (mailinput);
    } 
    else if (!isValidEmail(mailinputValue)) {
        setError (mailinput, 'please provide a valid email');
    }
    
    else {
        setSuccess (mailinput);
    }

}