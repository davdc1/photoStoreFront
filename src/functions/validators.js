function fNameVal(exp){
    return /^[a-z ,.'-]+$/.test(exp.toLowerCase())
}

function lNameVal(exp){
    return /^[a-z ,.'-]+$/.test(exp.toLowerCase())
}

function phoneVal(exp){
    if(/^\d{9}$/.test(exp) || /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(exp)){
        return true
    }
        return false
}

function emailVal(exp){
    return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(exp)
}

function cityVal(exp){
    return /^[a-z ,.'-]+$/.test(exp)
}

function countryVal(exp){
    return /^[a-z ,.'-]+$/.test(exp)
}

function postCodeVal(exp){
    return /[A-Za-z0-9]+/.test(exp)
}

function streetVal(exp){
    return /^[0-9a-z ,.'-]+$/.test(exp)
}

function buildingNumVal(exp){
    return /^[0-9]+$/.test(exp)
}

function nameOnCardVal(a){
    return /^[a-z ,.'-]+$/.test(a);
}

function cardNumVal(a){
    return (
        /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    .test(a)
    )
}

function cvvVal(a){
    return /^\d{3}$/.test(a);
}
function expVal(a){
    if(Date.parse(a) > Date.parse(new Date())){
        return true
    }
    return false
}

export const validators = {
    fNameVal: fNameVal,
    lNameVal: lNameVal,
    phoneVal: phoneVal,
    emailVal: emailVal,
    cityVal: cityVal,
    countryVal: countryVal,
    postCodeVal: postCodeVal,
    streetVal: streetVal,
    buildingNumVal: buildingNumVal,
}

export const creditValidators = {
    nameOnCardVal: nameOnCardVal,
    cardNumVal: cardNumVal,
    cvvVal: cvvVal,
    expVal: expVal
}

