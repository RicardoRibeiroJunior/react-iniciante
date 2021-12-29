//import react from "react";
import { useParams } from "react-router-dom";

export default function PagesPromotionForm(){

    const {id} = useParams();

    return(
        <div>
            FORM
            { id && (
                <div>id: {id}</div>
            )}
        </div>
    )
}