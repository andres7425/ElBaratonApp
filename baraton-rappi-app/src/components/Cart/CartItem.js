import React from 'react';

export default function CartItem({ item, value }) {
    const { id, name, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 text-capitalize text center">

            <div className="col-10 mx-auto col-lg-2 text-center">
                <span className="d-lg-none">Name of Product : </span>
                {name}
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <span className="d-lg-none">Price : </span>
                $ {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <div className="d-flex justify-content-center">
                    <div className="">
                        <span className="btn btn-black mx-1" onClick={() =>
                            decrement(id)}>-</span>

                        <span className="btn btn-black mx-1">{count}</span>

                        <span className="btn btn-black mx-1" onClick={() =>
                            increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-center">
                <strong>Total : $ {total} </strong>
            </div>
        </div>
    );

}