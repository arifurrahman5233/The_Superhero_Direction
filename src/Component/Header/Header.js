import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container bg-dark text-white rounded p-3 ">
            <h1 className="d-flex justify-content-center fluid"><span className="color py-2 px-5 rounded shadow-lg">Rooftop Garden</span></h1>
            <h3 className="d-flex justify-content-center">
                A fruit is a mature, ripened ovary, along with the contents of the ovary. The ovary is the ovule-bearing reproductive structure in the plant flower.</h3>
            <h4 className="d-flex justify-content-center">Budget At least 1000 BDT</h4>
        </div>
    );
};

export default Header;