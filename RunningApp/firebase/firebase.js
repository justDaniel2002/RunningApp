import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '638313013859-5085qigps8c1o0b7e3sf03d7d7r2rm4u.apps.googleusercontent.com',
});


export const register = async(email, password) => {
    if(email && password){
        try {
            const response = await auth().createUserWithEmailAndPassword(email, password)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}

export const login = async(email, password) => {
    if(email && password){
        try {
            const response = await auth().createUserWithEmailAndPassword(email, password)
            auth().
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}

export async function onGoogleButtonPress() {
    console.log("Press")
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    console.log(googleCredential)
    //return auth().signInWithCredential(googleCredential);
  }