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

import AtomicButton from './AtomicButton';

export async function getAtoms() {
    const atoms = await getDocs(collection(db, 'anatomy'));
    return atoms.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
  

export default async function Atom({name, description, snippet, body, noButton = false}){
    const atoms = await getAtoms();
    console.log({atoms});
    return(
      <div style={{border:'1px solid white', margin: '20px', padding: '20px'}} >
      <h2 className={`mb-3 text-2xl font-semibold`}>{name}</h2>
       <p>{description}</p>
       <p>{snippet}</p>
       <p>{body}</p>
       {
         !noButton && <AtomicButton id={atoms.id}  />
       }
       
       </div>
    )
}

