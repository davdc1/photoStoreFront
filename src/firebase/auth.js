import { auth } from "./firebase";

class Auth{
    constructor(){
        this.authenticated = false;
    }

    login = (email, password, onSucCb, onFailCb) => {
        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("user at login:",user)
            this.authenticated = true;
            if(onSucCb){
                onSucCb();
            }
        })
        .catch(e => {
            console.log('login error: ', e);
            if(onFailCb){
                onFailCb();
            }
        })
    }

    signUp = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
        .catch(e => console.log('user creation error:' , e))
    }

    logout = () => {

    }

    isAuthenticated = () => {
        return this.authenticated;
    }
}

export default new Auth();