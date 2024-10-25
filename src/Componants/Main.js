import React from "react";
import { Image } from "antd";
import TextHome from "./TextHome";
export default function Main(){
    return(
        <main>
            <section className="header-info">
                <div className="item">
                    <img src="/assets/images/icon-1.png" alt="Orthodontiste" />
                    <span>Orthodontiste</span>
                </div>
                <div className="item">
                    <img src="/assets/images/icon-2.png" alt="Orthodontiste" />
                    <span>Parodontiste</span>
                </div>
                <div className="item">
                    <img src="/assets/images/icon-3.png" alt="Orthodontiste" />
                    <span>Endodontiste</span>
                </div>
                <div className="item">
                    <img src="/assets/images/icon-4.png" alt="Orthodontiste" />
                    <span>Pédodontiste</span>
                </div>
            </section>
            <section className="about">
                <div className="text-home">
                    <TextHome/>
                </div>
                <div className="img-header"><Image src="/assets/images/about-banner.png"/></div>
            </section>
        </main>
    )
}