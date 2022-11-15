import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Mascota from "./mascota";
import { Link } from "react-router-dom";


const { useEffect, useState } = require("react");
export default function Detail() {

const [mascota, setMascotas] = useState({});
    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL).then(data => data.json()).then(data => {
            setMascotas(data.find(m=>m.id == params.mascotaId));
        })
    }, []);
 const params = useParams();
 return (
   <div>
     <h1>{mascota.nombre}</h1>
           <hr></hr>
           <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "50rem", widht:'500px' }}
       variant="top"
       src={mascota.foto}
       alt={mascota.descripcion}
     />
     <Card.Body>
       <Card.Text>{mascota.raza}</Card.Text>
     </Card.Body>
   </Card>
   </div>
 );
}