import { auth } from "./firebase";

class Auth{
    constructor(){
        this.authenticated = false;
    }

    login = (email, password, onSucCb, onFailCb) => {
        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            this.authenticated = true;
            if(onSucCb){
                onSucCb(user);
            }
        })
        .catch(e => {
            if(onFailCb){
                onFailCb();
            }
        })
    }

    signUp = (email, password, onSuccess, onFailure) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            if(onSuccess){
                onSuccess(res.user);
            }
        })
        .catch(e => {
            if(onFailure){
                onFailure(e);
            }
        })
    }

    logout = () => {

    }

    isAuthenticated = () => {
        return this.authenticated;
    }
}

export default new Auth();