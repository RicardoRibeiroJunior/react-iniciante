import react, {useEffect, useState} from "react";
import axios from "axios";
import PromotionCard from "../../../Components/Promotion/Card/Card";

export default function PagesPromotionSearch(){

  const [promotions, setPromotions] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        setPromotions(response.data)
      });
  }, []);//Passando o array vazio o useEffect será executado somente quando o componente for montado.

  return(
      <div style={{maxWidth: 800, margin: '30px auto'}}>
          {promotions.map((promotion) => (
            <PromotionCard promotion={promotion}/>
          ))}
      </div>
  );
}