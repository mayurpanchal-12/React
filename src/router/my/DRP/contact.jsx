import { useParams } from "react-router-dom";

export default function Contact() {
  const {param} = useParams()
  return (
    <div>
       
      <h1>Contact Page</h1>
      <h1>hello:{param}</h1>
      <p>You can reach us at: contact@example.com</p>
    </div>
  );
}
