'use client';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
class LoginService {
    auth: any;
    constructor() {
        this.auth = getAuth();
    }

    async login(email: String, password: String) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    }
}

