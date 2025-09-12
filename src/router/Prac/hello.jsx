import { useParams } from "react-router-dom"

export default function Hello(){
  const {fg} = useParams()
  return(
     <>
          hello :{fg}
       
     </>
  )
}