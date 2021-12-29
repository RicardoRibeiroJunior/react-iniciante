import React, {useState, useEffect} from "react";
import PromotionList from "../List/List";
import axios from "axios";
import {Link} from "react-router-dom";
import "./Search.css";

export default function PromotionSearch(){

    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        const params = {};
        if (search){
            params.title_like = search;
        }
        axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', {params})
        .then((response) => {
            setPromotions(response.data)
        });
    }, [search]);//Passando o array vazio o useEffect será executado somente quando o componente for montado.

    console.log(search);
    return(
        <div className="promotion-search">
            <header className="promotion-search__header">
                <h1>Promo Show</h1>
                <Link to="/create">Noma Promoção</Link>
            </header>
            
            <input 
                type="search" 
                className="promotion-search__input" 
                placeholder="Buscar" 
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            
            <PromotionList promotions={promotions} loading={!promotions.length}/>
        </div>
    )
}