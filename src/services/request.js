import firebase from "../firebase";
export const execute = (provider) =>{
    const db = firebase.collection(provider);
    return{
         getAll : () => {
            return db;
          },
          
         create : (data) => {
            return db.add(data);
          },
          
         update : (id, value) => {
            return db.doc(id).update(value);
          },
          
         remove : (id) => {
            return db.doc(id).delete();
          }
    }
}