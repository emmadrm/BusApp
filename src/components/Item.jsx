import React from "react";

function Item(props) {
    
    return (
        <div className="col"> 
            <div className="card shadow-sm"> 
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.image} alt={`${props.ItemName} item`} loading="lazy" />
                <div className="card-body"> 
                    <p className="card-text">{props.ItemName}</p> 
                        <div className="d-flex justify-content-center align-items-center">
                            <small className="text-body-secondary mx-4">{props.price}</small>
                            <button
                                type="button"
                                className="btn btn-md btn-outline-secondary"
                                onClick={() => {props.addItem({ name: props.ItemName, price: props.price });}}
                            >
                                Add to cart
                            </button> 
                        </div>
                </div> 
            </div> 
        </div> 
    );
}

export default Item;