function getPin(){
    const pin = getGeneratePin();
    const pinString = pin + "";
    if(pinString.length === 4){
        return pin;
    } else {
        return getPin();
    }
}


function getGeneratePin(){
    const generate = Math.round(Math.random() * 10000);
    return generate;
}

document.getElementById("generate-pin").addEventListener("click", function(){
    const pin = getPin()

    const displayPin = document.getElementById("display-pin");
    displayPin.value = pin;
})


document.getElementById("calculator").addEventListener("click", function(event){
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById("typed-numbers");
    const previousNumber = typedNumbersField.value;
    if(isNaN(number)){
        if(number === "C"){
            typedNumbersField.value = "";
        } else if(number === "<"){
            const digit = previousNumber.split('');
            digit.pop();
            const remainingDigit = digit.join("");
            typedNumbersField.value = remainingDigit
        }
    }
    else{
        const newTypeNumber = previousNumber + number;
        typedNumbersField.value = newTypeNumber;
    }
})

document.getElementById("verify-pin").addEventListener("click", function(){
    const displayPinField = document.getElementById("display-pin");
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById("typed-numbers");
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById("pin-success");
    const pinFailureMessage = document.getElementById("pin-failure");

    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    } else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})