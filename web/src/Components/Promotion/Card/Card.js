import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function PromotionCard({promotion}){
    return(
        <div className="promotion-card">
            <img src={promotion.imageUrl} alt="imagem do produto." className="promotion-card__image"/>
            <div className="promotion-card__info">
                <h1 className="promotion-card__title">{promotion.title}</h1>
                <span className="promotion-card__price">R$ {promotion.price}</span>
                <footer className="promotion-card__footer">
                    {promotion.comments.length > 0 &&(
                        <div className="promotion-card__comment">"{promotion.comments[0].comment}"</div>
                    )}

                    <div className="promotion-card__comments-count">{promotion.comments.length} {promotion.comments.length > 1 ? "Comentários" :"Comentário"}</div>
                    <a href={promotion.url} target="_blank" rel="noreferrer" className="promotion-card__link">IR PARA O SITE</a>
                    <Link to={`/edit/${promotion.id}`}>Editar</Link>
                </footer>
            </div>
        </div>
    )
}