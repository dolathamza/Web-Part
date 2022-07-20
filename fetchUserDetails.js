import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from './firebaseConfig';


export const userAccessToken = () => {
    const accessToken = localStorage.getItem("accessToken") !== "undefined" ? JSON.parse(localStorage.getItem("accessToken")) : localStorage.clear()
    return accessToken
}

export const fetchUser = () => {
    const userInfo = localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")) : localStorage.clear()
    return userInfo
}

export const getMe = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve({
                    authId: user.uid,
                    email: user.email,
                    name: user.displayName,
                    picture: user.photoURL,
                    token: user.accessToken
                });
            } else {
                reject('User Signed Out');
            }
        });
    })
}

export const emailPasswordSignUp = (data) => {
    return new Promise((resolve, reject) => {
        console.log('data from client....', data)
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in


                const user = userCredential.user;
                resolve({
                    email: user.email,
                    name: user.name,
                    token: user.accessToken,
                    authId: userCredential.user.uid,
                    photoURL: user.photoURL
                });
                // ...
            })
            .catch((error) => {
                reject(error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    })
}

export const emailPasswordSignIn = (data) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {


                // Signed in
                const user = userCredential.user;

                resolve({
                    email: user.email,
                    name: user.displayName,
                    picture: user.photoURL,
                    token: user.accessToken,
                    authId: user.uid
                });
                // ...
            })
            .catch((error) => {
                reject(error.message)
                console.log('local signin error...', error.message);

                // ..
            });

    })
}

export const logOUt = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then(() => {
            resolve({success: true})
        }).catch((error) => {
            reject(false)
        });
    })
}