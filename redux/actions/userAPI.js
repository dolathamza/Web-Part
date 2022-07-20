import {database} from '../../firebaseConfig';
import {addDoc, collection} from 'firebase/firestore';

const dbInstance = collection(database, 'users');


export const register_user_api = (data) => async (dispatch) => {
    try {
        console.log('data from client....', data)
        let res = await addDoc(dbInstance, data);
        console.log('response from server...', res);
        // cb(true)
        // if (res.data) {
        //   cb(true);
        // }
    } catch (err) {
        console.log('error...', err);
    }
}