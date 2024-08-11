'use client'
 import { useRouter } from "next/navigation"

 export default function AtomicButton({ id }){
const router = useRouter()
function handleClick(){
    router.push('/epistemology/${slug}')
}

    return(
        <button onClick={handleClick} className="bg-[#009DE0] hover:bg-blue-700 text-white font-bold font-sans py-2 px-4 rounded">
            Update
        </button>
    )
 }