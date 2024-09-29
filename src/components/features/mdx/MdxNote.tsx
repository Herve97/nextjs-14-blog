import { Alert } from "@/components/ui/alert"
import { Notebook } from "lucide-react"
import { ReactNode } from "react"

export type MdxNoteProps = {
    children: ReactNode
}

export const MdxNote = (props: MdxNoteProps)=>{
    return <Alert> 
        <Notebook size={12}/>
        <div> {props.children} </div>
    </Alert>
}