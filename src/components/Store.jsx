import React from "react";
import { Link } from "react-router-dom";

function Store(props) {
    const state = {
        storeName: props.name,
        logo: props.logo,
    };

    return (
        <div>
            <div className="store_list">
                <div className="store-card">
                    <Link to="/menu" state={state} className="store-item">
                        <img className="logo" src={props.logo} alt={`${props.name} logo`} loading="lazy" />
                        <h4>{props.name}</h4>
                        <p>{props.category}</p>
                        <p>{props.offer}</p>
                        <small>{props.time}</small>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Store;