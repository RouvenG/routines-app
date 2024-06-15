'use client';
import { initializeApp } from "firebase/app";
import { Auth, browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";

class LoginService {
    auth: Auth;

    constructor() {
        const config = {
            apiKey: "AIzaSyDKmI2cdI_Le0FK6tJFwufzAcuIKh7gVuk",
            authDomain: "jural-406217.firebaseapp.com",
        };
        const app = initializeApp(config);
        this.auth = getAuth();
        
        setPersistence(this.auth, browserSessionPersistence)
    }

    async isLoggedIn() {
        return this.auth.currentUser != null;
    }


    async login(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    }
}

const loginService = new LoginService();
export default loginService;
