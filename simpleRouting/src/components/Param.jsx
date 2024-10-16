import {useParams} from "react-router-dom"
export default function Param(){
    let {id}=useParams()
    return (
        <h1>parameter : {id}</h1>
    )
}