import Atom from '@/components/Atom'
import { getAtoms } from '@/components/Atom'; 

export default async function Atoms(){
    const atoms = await getAtoms();
    console.log({atoms});
    return(
        <div>
        <h1>Epistemology of a component</h1>
        {
            atoms.length > 0 && 
        atoms.map(({id, name, description})=>(
            <Atom key={id} id={id} name={name} description={description} />
        ))
        }
        
        </div>
    )
}