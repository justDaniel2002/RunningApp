

import { initializeApp } from "@firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider  } from '@firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAEkdSBfGLPyhRr9eqiSFNcrP02NNLI3Kg",
  authDomain: "communityproject-7fbb6.firebaseapp.com",
  projectId: "communityproject-7fbb6",
  storageBucket: "communityproject-7fbb6.appspot.com",
  messagingSenderId: "638313013859",
  appId: "1:638313013859:web:88570ec76c0267c1800e56",
  measurementId: "G-TD72CMVDQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
auth.onAuthStateChanged( (user) => {
    console.log('user',user)
    if(user){
        auth.currentUser?.getIdToken(true)
        console.log('get id token',user)
    }
    
  })

export const register = async(email:string, password:string) => {
    if(email && password){
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}

export const login = async(email:string, password:string) => {
    if(email && password){
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            
            return response
        } catch (error) {
            console.log(error)
        }
    }
}

export const loginPopUp = async() => {
    const provider = new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
}

// export async function onGoogleButtonPress() {
//     console.log("Press")
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();
  
//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
//     // Sign-in the user with the credential
//     console.log(googleCredential)
//     //return auth().signInWithCredential(googleCredential);
//   }