import React from "react";
import "./Container.css";

export default function UIContainer({children}){
    return(
        <div className="ui-container">
            {children}
        </div>
    )
}