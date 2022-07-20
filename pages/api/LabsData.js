import {collection, getDocs} from "firebase/firestore";

import {database} from "../../firebaseConfig";

// export const lab_data = [];

async function getLabs(req, res) {

    const querySnapshot = await getDocs(collection(database, "Labs"));
    var lab_data = [];
    querySnapshot.forEach((doc) => {
        //map data to array
        lab_data.push({...doc.data(), key: doc.id});
        // console.log(doc.data());
        // const result = JSON.parse(JSON.stringify(doc.data()));
        // console.log("result", result['name']);

    });
    console.log("lab_data", lab_data);
    res.status(200).json(lab_data);
    // querySnapshot.forEach((doc) => {
    //     //map data to array
    //     lab_data.push(doc.data());
    //     // console.log(doc.data());
    //     const result = JSON.parse(JSON.stringify(doc.data()));
    //     console.log("result", result['name']);
    //
    // });
}

export default getLabs;




