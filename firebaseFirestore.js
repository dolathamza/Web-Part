import {collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where} from "firebase/firestore";
import {auth, database} from './firebaseConfig';
import {updatePassword} from "firebase/auth";

export function checkEmailAlreadyExist(email) {
    return new Promise(async (resolve, reject) => {
        try {
            const allusers = await getDocs(collection(database, "Users"));
            var matched = false
            allusers.forEach((doc) => {
                if (doc._document.data.value.mapValue.fields.email.stringValue == email) {
                    matched = true
                }
            });
            resolve(matched)
        } catch (error) {
            console.log('error in checking user exist already...', error)
            reject(error)
        }
    })
}

export function storeNewUSerToFirestoreDB(credentials) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(credentials.authId)
            const docReff = doc(database, 'Users', credentials.authId);
            const docRef = await setDoc(docReff, {
                ...credentials

            });
            if (docReff.id) {
                resolve({id: docReff.id, ...credentials});
            }
        } catch (e) {
            reject("Error adding document: ", e);
        }
    })
}


export function storeNewUSerToVaccineFirestoreDB(id, credentials) {
    return new Promise(async (resolve, reject) => {
        try {


            const docReff = doc(database, 'Vaccinations', id);
            const docRef = await setDoc(docReff, {
                user: id, ...credentials,


            });
            if (docReff.id) {
                console.log("data added in vaccination form...", id)
                resolve({id: docReff.id, ...credentials});
            }
        } catch (e) {
            reject("Error adding document: ", e);
        }
    })
}


export function getSingleUserFromFirestoreDBById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const q = query(collection(database, "Users"), where("authId", "==", id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                resolve({...doc.data(), id: doc.id});
            });
        } catch (err) {
            console.log('error while getting document...', err.message)
            reject(err.message);
        }
    })
}

export function updateSingleUserFromFirestoreDBById(id, updates) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("id recieved...", id)
            const washingtonRef = doc(database, "Users", id);
            var dataa = {
                hadFirstVacc: updates.hadFirstVacc,
                lastVac: updates.lastVac
            }
            let result = await updateDoc(washingtonRef, dataa
            );
            const docRef = doc(database, "Users", id);
            const docSnap = await getDoc(docRef);
            console.log("Ye Yahan Tak Chala");
            await storeNewUSerToVaccineFirestoreDB(id, updates)
            if (docSnap.exists()) {
                resolve({...docSnap.data(), id});
            } else {
                resolve(false);
            }

        } catch (err) {
            console.log('error while updating document...', err.message)
            reject(err.message);
        }
    })
}


//updateUser for Profile Function
export function updateSingleUserFromFirestoreDBByIdProfile(id, updates) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("id recieved...", id)
            const washingtonRef = doc(database, "Users", id);
            let result = await updateDoc(washingtonRef, updates);
            const docRef = doc(database, "Users", id);
            const docSnap = await getDoc(docRef);
            await storeNewUSerToVaccineFirestoreDB(id, updates)
            if (docSnap.exists()) {
                resolve({...docSnap.data(), id});
            } else {
                resolve(false);
            }

        } catch (err) {
            console.log('error while updating document...', err.message)
            reject(err.message);
        }
    })
}


export function updateUserPasswordFromFirestoreDBById(password) {
    return new Promise(async (resolve, reject) => {
        try {

            const user = auth.currentUser;

            updatePassword(user, password).then(() => {
                // Update successful.
                resolve(true);
            }).catch((error) => {
                console.log('erro part...', error.message)
                reject(error.message)
            });
        } catch (error) {
            console.log('response from serror')
            reject(error.message)

        }
    })
}


export function getAllLabs() {
    return new Promise(async (resolve, reject) => {
        try {

            let array = [];
            let querySnapshot = await getDocs(collection(database, "Labs"));
            querySnapshot.forEach((doc) => {
                array.push({id: doc.id, ...doc.data()});
            });
            resolve(array);
        } catch (error) {
            console.log('error in fetching table...', error.message)
            reject(true);

        }
    })
}


export function getSingleLabFromFirestoreDBById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(database, "Labs", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                resolve(docSnap.data())
            } else {
                reject(false);
            }
        } catch (err) {
            console.log('error while getting document...', err.message)
            reject(err.message);
        }
    })
}

// diests

export function getAllDiets() {
    return new Promise(async (resolve, reject) => {
        try {
            let array = [];
            let querySnapshot = await getDocs(collection(database, "Diets"));
            querySnapshot.forEach((doc) => {
                array.push({id: doc.id, ...doc.data()});
            });
            resolve(array);
        } catch (error) {
            console.log('error in fetching table...', error.message)
            reject(true);

        }
    })
}

export function getAllRemedies() {
    return new Promise(async (resolve, reject) => {
        try {
            let array = [];
            let querySnapshot = await getDocs(collection(database, "Remedies"));
            querySnapshot.forEach((doc) => {
                array.push({id: doc.id, ...doc.data()});
            });
            resolve(array);
        } catch (error) {
            console.log('error in fetching table...', error.message)
            reject(true);

        }
    })
}


export function getDietPlansOfADiet(id) {
    return new Promise(async (resolve, reject) => {
        try {
            let array = [];
            let querySnapshot = await getDocs(collection(database, "Diets", id, "Details"));
            querySnapshot.forEach((doc) => {
                array.push({id: doc.id, ...doc.data()});
            });
            resolve(array);
        } catch (error) {
            console.log('error in fetching diest...', error.message)
            reject(true);

        }
    })
}

export function getRemedyPlansOfADiet(id) {
    return new Promise(async (resolve, reject) => {
        try {
            let array = [];
            let querySnapshot = await getDocs(collection(database, "Remedies", id, "Details"));
            querySnapshot.forEach((doc) => {
                array.push({id: doc.id, ...doc.data()});
            });
            resolve(array);
        } catch (error) {
            console.log('error in fetching Remedies...', error.message)
            reject(true);

        }
    })
}


export function getSingleDietPlanOfADiet() {
    return new Promise(async (resolve, reject) => {
        console.log("single diest called...")
        try {
            let array = [];
            let docSnap = await getDocs(collection(database, "Diets", "MyIeE96iis0RTl6qRK8o", "Details", "R6bGuj3B0mgJi12GhcTX"));
            console.log("docSnap...", docSnap)
            docSnap.forEach((doc) => {
                console.log("doc found...", doc.id, doc.data());
                array.push({id: doc.id, ...doc.data()});
            });
            resolve(array);
            // if (docSnap.exists()) {
            //     console.log("single diest data....",...docSnap.data())
            //     resolve({ ...docSnap.data()});
            // } else {
            //     resolve(false);
            // }
        } catch (error) {
            console.log('error in fetching diest...', error.message)
            reject(true);

        }
    })
}


export function getSingleRemedyPlanOfADiet() {
    return new Promise(async (resolve, reject) => {
        console.log("single remedy called...")
        try {
            let array = [];
            let docSnap = await getDocs(collection(database, "Remedies", "\n" +
                "\n" +
                "ZBFJgNYL2w1TsM74Tcvj ", "Details", "8qO0kGwgu8yNoluA5qCX"));
            console.log("docSnap...", docSnap)
            docSnap.forEach((doc) => {
                console.log("doc found...", doc.id, doc.data());
                array.push({id: doc.id, ...doc.data()});
            });
            resolve(array);
            // if (docSnap.exists()) {
            //     console.log("single diest data....",...docSnap.data())
            //     resolve({ ...docSnap.data()});
            // } else {
            //     resolve(false);
            // }
        } catch (error) {
            console.log('error in fetching remedy...', error.message)
            reject(true);

        }
    })
}