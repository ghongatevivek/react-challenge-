import React from "react";

function NetflixCard(params){
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={params.imgSrc} alt="" className="card_img"/>
                    <div>
                        <span className="card_info">{params.sSpan}</span>
                        <h3 className="card_category">{params.sName}</h3>
                        <a className="card_title" href="https://www.netflix.com/in/title/80100172" target="_blank">
                            <button>Check Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NetflixCard