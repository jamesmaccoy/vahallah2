import Atom from '@/components/Atom'
import { getAtoms } from '@/components/Atom'; 

export default async function Atoms(){
    const atoms = await getAtoms();
    console.log({atoms});
    return(
        <div>
        <h1 className='p-1 rounded-md text-2xl font-bold'>Valhalla </h1>
        <p>Data Fraud and malicious attacks are matter of time. A Design framework of reusable principal components with servers component properties using tailwind for fluid layout</p>
        <a href="https://github.com/jamesmaccoy/vahallah2" target="_blank" rel="noopener noreferrer">
            <button>Clone on GitHub</button>
        </a>
        {
            atoms.length > 0 && 
        atoms.map(({id, name, description})=>(
            <Atom key={id} id={id} name={name} description={description} />
        ))
        }
    
    <h1 className='p-1 rounded-md text-2xl font-bold'>The Catch All summary pattern</h1>
    <p>🧮 Need analysis provided by behaviour? propensity ask?</p>

    <p>Starting at User agreement. followed by Health Function(); Initiated from marketing CTA. Form result calculates number (Cover amount) by dividing by Rate.</p>

    <p>Positive form submission has delightful  interaction confirming consultant action, where the adverse min & max is validated, corrected and resubmitted
    Update ticket follows…</p>

    <p>🩺 Threshold obtain by completing the healthScreen function();     Min Max for each Pocket</p>

    <p>Dashboard state: contains 2 list linking to #Pockets</p>
    <ul><li>Active Policy inc Categories,</li>
    <li>Array of Cancelled Policy</li>
    <li>Suggested Cover & CTA button</li></ul>
    <h1 className='p-1 rounded-md text-2xl font-bold'>Update policy - User Roles & relation</h1>
    <p>All DBs are anonymous by default. Authenticate and list [[...policy]] by creating a folder and pastings the above, providing the principal pattern  
CRUD operation performed, listing a collection of documents, Filter "Recipients"(User) by Category(4 pockets). Edit the pocket (number & users list )and user object/row by selecting the edit action.
Summaries transaction before payment

Any change in object follows user agreement.</p>
        </div>
    )
}