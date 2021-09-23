import { auth } from "./firebase";

class Auth{
    constructor(){
        this.authenticated = false;
    }

    login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("user at login:",user)
            this.authenticated = true
        })
        .catch(e => console.log('login error: ',e))
    }

    signUp = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
        .catch(e => console.log('user creation error:' ,e))
    }

    logout = () => {

    }

    isAuthenticated = () => {
        return this.authenticated;
    }
}

export default new Auth();