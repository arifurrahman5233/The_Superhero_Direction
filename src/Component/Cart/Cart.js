import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = [];
    for (const plant of cart) {
        total = total + plant.price;
        name = name + plant.name;
    }

    return (
        <div>
            <h3 className="fw-bold">Order Summary</h3>
                <h6><span className="fw-bold"><i class="fas fa-shopping-cart"></i>Total Count: </span>{cart.length}</h6>
                <hr />
                <h6><span className="fw-bold">Price: </span>{total}</h6>
                <hr />
                <h6><span className="fw-bold"><i class="fas fa-shopping-cart"></i>Details Names: </span><div className="listName"> {name}</div>
                </h6>
                <hr />
                <div className="text-center">
                    <button className="btn text-center fw-bold btn-secondary"> <i class="fas fa-shopping-bag"></i> Buy Now</button>
                </div>
        </div>
    );
};

export default Cart;