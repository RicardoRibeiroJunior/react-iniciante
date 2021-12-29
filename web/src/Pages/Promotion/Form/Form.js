import react from "react";
import { useParams } from "react-router-dom";
import PromotionForm from "../../../Components/Promotion/Form/Form";
import UIContainer from "../../../Components/UI/Container/Container";

export default function PagesPromotionForm(){

    const {id} = useParams();

    return(
        <UIContainer>
            <PromotionForm/>
        </UIContainer>
    )
}