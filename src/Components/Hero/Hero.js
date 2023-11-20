import React from "react";
import "./hero.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Logo.png'
import favorite from '../../Favoritehome.png'

export function Hero(props) {
    return (
        <>
            <div className="hero">
                    <nav className="container">
                        <div className='logo'>
                            <img src={logo} />
                        </div>
                        <div className='fav'>
                                <img src={favorite} />
                        </div>
                    </nav>
                <div className="search">
                    <h1>Watch Movies Online For Free</h1>
                    <input
                        type="text"
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                        placeholder="what do you want to see?" />
                </div>
            </div>

        </>
    )
}