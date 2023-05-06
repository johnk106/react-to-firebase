import { addDoc,collection} from 'firebase/firestore';
import { db } from "../lib/firebase.config";


const Firestore = {
    writeDoc: (...args) => {
        const [inputs,collection_name] = args;
        return new Promise(resolve => {
            const randomIndex = Math.floor(Math.random() * 1000000);
            try{
                const docRef =  addDoc(collection(db, "users"), {
                    key: `${randomIndex}`,
                    last: "Lovelace",
                    born: 1815
                  });
            }catch(e){

            }
        });
    }
}
