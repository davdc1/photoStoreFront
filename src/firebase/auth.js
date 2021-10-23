import { auth } from "./firebase";

class Auth{
    constructor(){
        this.authenticated = false;
    }

    login = (email, password, onSucCb, onFailCb) => {
        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("user at login:",user.user.email)
            this.authenticated = true;
            if(onSucCb){
                onSucCb(user);
            }
        })
        .catch(e => {
            console.log('login error: ', e);
            if(onFailCb){
                onFailCb();
            }
        })
    }

    signUp = (email, password, onSuccess, onFailure) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("res.user.email on ceate acount:", res.user.email);
            if(onSuccess){
                onSuccess(res.user);
            }
        })
        .catch(e => {
            console.log('user creation error:' , e);
            if(onFailure){
                onFailure();
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