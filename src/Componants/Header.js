import React, { useContext } from "react";
import { GlobalContext } from "../Databases/GlobalContext";
import { Image } from "antd";
export default function Header(){
    const { regionsSenegal } = useContext(GlobalContext);
    return(
        <header>
            <div className="slogan">
                <span>Bienvenu chez Samadentist</span>
                <h1>Trouvez un dentist près de chez vous</h1>
                <form>
                    <select>
                        {regionsSenegal.map((region, key)=>{
                            return(
                                <option value={region} key={key}>{region}</option>
                            )
                        })}
                    </select>
                    <button className="search-btn btn">Rechercher</button>
                </form>
            </div>
            <div className="img-header"><Image src="/assets/images/hero-banner.png"/></div>
        </header>
    )
}