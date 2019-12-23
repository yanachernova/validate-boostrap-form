let form = document.querySelector("form");
let messages = document.querySelector(".alert");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let cardNumber = document.querySelector("#cardNumber");
    if(!validator.isCreditCard(cardNumber.value)){
        cardNumber.classList.add("is-invalid");
        messages.classList.remove("d-none");
    }else{
        cardNumber.classList.remove("is-invalid");
        cardNumber.classList.add("is-valid");
        messages.classList.add("d-none");
    }

    let amount = document.querySelector("#amounttotal");
    if(validator.isEmpty(amount.value)){
        amount.classList.add("is-invalid");
        messages.classList.remove("d-none");
    }else{
        amount.classList.remove("is -invalid");
        amount.classList.add("is-valid");
        messages.classList.add("d-none");
    }

    let cvv = document.querySelector("#cvstotal");
    if(validator.isEmpty(cvv.value)){
        cvv.classList.add("is-invalid");
        messages.classList.remove("d-none");
    }else{
        cvv.classList.remove("is-invalid");
        cvv.classList.add("is-valid");
        messages.classList.add("d-none");
    }

    let firstname = document.querySelector("#firstname1");
    if(!validator.isAlpha(firstname.value)){
        firstname.classList.add("is-invalid");
        messages.classList.remove("d-none");
    }else{
        firstname.classList.remove("is-invalid");
        firstname.classList.add("is-valid");
        messages.classList.add("d-none");
    }

    let lastname = document.querySelector("#lastname1");
    if(!validator.isAlpha(lastname.value)){
        lastname.classList.add("is-invalid");
        messages.classList.remove("d-none");
    }else{
        lastname.classList.remove("is-invalid");
        lastname.classList.add("is-valid");
        messages.classList.add("d-none");
    }

    let cityinfo = document.querySelector("#cityinfo1");
    if(!validator.isAlpha(cityinfo.value)){
        cityinfo.classList.add("is-invalid");
        messages.classList.remove("d-none");
    }else{
        cityinfo.classList.remove("is-invalid");
        cityinfo.classList.add("is-valid");
        messages.classList.add("d-none");
    }

    let postcode = document.querySelector("#postcode1");
    if(!validator.isInt(postcode.value)){
        postcode.classList.add("is-invalid");
        messages.classList.remove("d-none");
    }else{
        postcode.classList.remove("is-invalid");
        postcode.classList.add("is-valid");
        messages.classList.add("d-none");
    }

    let inputState = document.querySelector("#inputState1");
    if(validator.isEmpty(inputState.value)){
        inputState.classList.add("is-invalid");
        messages.classList.remove("d-none");
    }else{
        inputState.classList.remove("is-invalid");
        inputState.classList.add("is-valid");
        messages.classList.add("d-none");
    }

    let inlineRadio = document.querySelectorAll(".form-check-input");
    let yana = document.querySelector("#yana");
    if(!inlineRadio[0].checked && !inlineRadio[1].checked && !inlineRadio[2].checked && !inlineRadio[3].checked){
        yana.style.backgroundColor = "red";
        messages.classList.remove("d-none");
    }else{
        yana.style.backgroundColor = "green";
        messages.classList.add("d-none");
    }

});
