//'use client'
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  documentId,
} from 'firebase/firestore';
import { db } from '@/firebase'

export async function getAtoms() {
    const atoms = await getDocs(collection(db, 'anatomy'));
    return atoms.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
  

export default async function Atom({name, description}){
    const atoms = await getAtoms();
    console.log({atoms});
    return(
        <div style={{border:'1px solid white', margin: '20px', padding: '20px'}} >
        <h1>{name}</h1>
        <p>{description}</p>
        </div>
    )
}

