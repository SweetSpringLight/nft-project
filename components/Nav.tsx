import Image from 'next/image'
import React, { useState } from "react";
export default function Nav (){
    const [expanded, setExpanded] = useState(false);
    function scrollToTop() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
    function onClickButton() {
        setExpanded(!expanded)
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark`} >
                <div className="container-fluid">
                    <span onClick={scrollToTop}>
                        <Image
                            src="/logo-nav.png"
                            alt="Vercel Logo"
                            className="logo-position"
                            width={90}
                            height={90}
                            priority
                        />
                    </span>
                    <button className="navbar-toggler" onClick={onClickButton} type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${expanded ? 'show' : 'hidden'}`} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="active" onClick={scrollToTop} href="#">Home</a>
                            <a href="#">Collection</a>
                            <a href="#">Team</a>
                            <a href="#">Roadmap</a>
                            <a href="#">Gallery</a>
                            <a href="#">Stake</a>
                            <a href="#">Claim</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}