import React from "react";

function Store(props) {
    return (
        <div>
            <div className="store_list">
                <div className="store-card" >  
                    <a href="/" className="store-item"> 
                        <img className="logo" src={props.logo} alt={`${props.name} logo`} loading="lazy" />
                        <h4>{props.name}</h4>
                        <p>{props.category}</p>
                        <p>{props.offer}</p>
                        <small>{props.time}</small>
                    </a>  
                </div>
            </div>
        </div>
    );
}


export default Store;