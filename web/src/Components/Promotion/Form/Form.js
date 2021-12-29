import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const initialValue = {
    title:'',
    url:'',
    imageUrl:'',
    price:0
}

export default function PromotionForm(){

    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();

    function onChange(ev){
        const {name, value} = ev.target;
        
        //spread, dessa forma é criado um novo objeto values baseado no primeiro (state) modificando
        //apenas a propriedade nome e setando para o state novamente.
        //assim garante a imutabilidade no react.
        setValues({...values, [name] : value});
    }

    function onSubmit(ev){
        ev.preventDefault();

        axios.post('http://localhost:5000/promotions', values)
            .then((reponse) => {
                navigate('/');
        });
    }

    return(
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className="promotion-form__group">
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" type="text" onChange={onChange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="url">Link</label>
                    <input id="url" name="url" type="text" onChange={onChange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="imageUrl">Imagem (URL)</label>
                    <input id="imageUrl" name="imageUrl" type="text" onChange={onChange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" type="number" onChange={onChange}/>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}