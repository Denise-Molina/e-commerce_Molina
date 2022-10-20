// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_EoceLCYboyYJ1LIE2Os8HWm8HNHC6IU",
  authDomain: "sasha-pasteles.firebaseapp.com",
  projectId: "sasha-pasteles",
  storageBucket: "sasha-pasteles.appspot.com",
  messagingSenderId: "746962777624",
  appId: "1:746962777624:web:4e6139102e584abc7a756d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const micolleccion = collection(firestore, "tortas");
  let respuesta = await getDocs(micolleccion);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItems(idParams) {
  const docRef = doc(firestore, "tortas", idParams);
  const docSnapshot = await getDoc(docRef);
  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "tortas");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}


export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);
  console.log(respuesta.id);
}

export default firestore;
