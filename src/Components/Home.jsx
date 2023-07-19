import React, { useState, useEffect } from "react";
import logo from "./Images/galerie_logo.png";
import oizo from "./Images/lumpy_bird_logo.png";
import chat from "./Images/abradacabra.png";
import dog from "./Images/dog.png";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
    return (
        // premier élément du header : titre and logo
        <div className="HomeContainerBody">
            <div className="titreHome">
                <div><img src={logo} alt="Titre Galeriez" /></div>
                <div>Galeriez.com</div>
            </div>
            {/* barre du header avec shop home aide...    */}
            <div className="barreHeader">
                <Link to="/">Home</Link>
                <div>Shop</div>
                <div>Aide</div>
            </div>
            <div className="chooseGaleriez">
                <div>
                    <div className="rainAnimated">Choose your galeriez</div>
                </div>
            </div>
            <div className="lienVersPage">
                <div className="page">
                    {/* lien vers page oizo */}
                    <div><Link to ="/Oizo"><img src={oizo} alt="Vers Oizo" /></Link></div>
                    <div>14/04/2023</div>
                    {/* lien vers page chat */}
                </div>
                <div className="page">
                    <div><Link to ="/Chat"><img src={chat} alt="Vers Chat" /></Link></div>
                    <div>18/04-20/04/2023</div>
                </div>
            </div>
            <div className="lienVersPage">
                {/* lien vers page chien */}
                <div className="page">
                    <div><img src={dog} alt="Vers Chien"/></div>
                    <div>A VENIR</div>
                </div>
            </div>
        </div>
    );
}

export default Home;