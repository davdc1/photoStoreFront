
export function nameVal(exp){
    return /^[a-z ,.'-]+$/.test(exp.toLowerCase())
}

export function phoneVal(exp){
    if(/^\d{9}$/.test(exp) || /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(exp)){
        return true
    }
        return false
}

export function emailVal(exp){
    return /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(exp)
}

export function cityVal(exp){
    return /^[a-z ,.'-]+$/.test(exp)
}

export function countryVal(exp){
    return /^[a-z ,.'-]+$/.test(exp)
}

export function postCodeVal(exp){
    return /[A-Za-z0-9]+/.test(exp)
}

export function streetVal(exp){
    return /^[a-z ,.'-]+$/.test(exp)
}

export function buildingNumVal(exp){
    return /^[0-9]+$/.test(exp)
}