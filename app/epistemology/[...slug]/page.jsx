import Details from '@/components/Details'

import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

export async function generateStaticParams(){
    const atoms = await getDocs(collection(db, 'anatomy'));
    return atoms.docs.map((doc) => ({ slug: [doc.id], ...doc.data() }));

}


async function getAtoms(ids){
    const promises = []
    for (const id of ids){
        promises.push(getDoc(doc(db, 'anatomy', id))) 
    }
    const atoms = await Promise.all(promises);
    return atoms.map((atom, index) => ({ id: ids[index], ...atom.data() }));
}

export default async function AtomPage({params}){
    const ids = Array.isArray(params.slug) ? params.slug : [params.slug]; 
    const atoms = await getAtoms(ids);
    const atom = atoms[0];
    const { name, description } = atom;
    console.log({params});
   
    return atoms.length > 0 && (
        atoms.map(({id, name, description}) => (
                    <Details noButton name={name}  description={description}  key={id} />
                ))
            )
}