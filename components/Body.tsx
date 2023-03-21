import Image from "next/image";
import React from "react";
import { useState, useEffect } from 'react';
let timerId: any = null;
export default function Body (){
    let slideIndex = 0;
    function showSlides() {
        let i;
        let slides = document.querySelectorAll<HTMLElement>(".item-cat") as NodeListOf<HTMLElement>;
        for(i = 0; i < slides.length; i++) {
            slides[i]["style"].display = "none"
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1]["style"].display = "block";
        if (timerId) {
            clearInterval(timerId);
        }
        timerId = setInterval(() => {
            showSlides();
        }, 250)
        // setTimeout(showSlides, 500);
    }
    useEffect(() => {
        showSlides();
        return () => {
            clearInterval(timerId);
        }
    }, [])
    return (
        <>
            <div className="container-fluid container-height">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-text-pos">
                            <h4 className="hero-text"><svg className="banner-text" width="100%" height="100"><text
                                        fill="black" fillOpacity="0.4" fontSize="80" x="188" y="85"
                                        textAnchor="middle" stroke="#ffffff">Public Sale</text></svg><br /><span
                                    className="sold-text">Sold Out!</span>
                                <div className="hero-btn">Buy now on OpenSea</div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 monogatari-left-padding">
                            <div className="mid-section">
                                <div className="stick stick-black  reveal reveal-down">
                                    <h5 className="reveal reveal-right">Monogatari</h5>
                                    <p className="reveal reveal-up">3027 AD. An evil regime has taken over the known world. Everything changed
                                        when a great force was released by the attack brought upon by the New Order.
                                        Orbs of great power were dispersed across the world. Only 7,777
                                        chosen warriors have gathered to be on a mission to obtain the orbs and use
                                        it to fight back in the hopes of regaining what was lost. Their heroism has
                                        been kept for their tales to be passed on. This is the story
                                        of SoulZ.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pad-hero-mob-left">
                            <div className="red-section">
                                <div className="logo-circle-red"></div>
                                <div className="container1 h-100">
                                    <div className="list-item-cat h-100">
                                        <div className="item-cat h-100 position-relative">
                                            <Image
                                                src="/Yellow-cat.png"
                                                alt="Vercel Logo"
                                                fill={true}
                                                objectFit="contain"/>
                                        </div>
                                        <div className="item-cat h-100 position-relative">
                                            <Image
                                                src="/BlackCat.png"
                                                alt="Vercel Logo"
                                                fill={true}
                                                objectFit="contain"/>
                                        </div>
                                        <div className="item-cat h-100 position-relative">
                                            <Image
                                                src="/GentalCat.png"
                                                alt="Vercel Logo"
                                                fill={true}
                                                objectFit="contain"/>
                                        </div>
                                        <div className="item-cat h-100 position-relative">
                                            <Image
                                                src="/NinjaCat.png"
                                                alt="Vercel Logo"
                                                fill={true}
                                                objectFit="contain"/>
                                        </div>
                                        <div className="item-cat h-100 position-relative">
                                            <Image
                                                src="/JudoCat.png"
                                                alt="Vercel Logo"
                                                fill={true}
                                                objectFit="contain"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container home-page-container orb-of-z" style={{["paddingTop" as any]: "50px"}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <span id="surround">
                                            <span id="initial">
                                                <Image
                                                    src="/1.1.png"
                                                    alt="Vercel Logo"
                                                    width={233}
                                                    height={309}
                                                    priority/>
                                            </span>
                                            <span id="onhover">
                                                {/* <Image
                                                    src="/1.png"
                                                    alt="Vercel Logo"
                                                    width={233}
                                                    height={309}
                                                    priority/> */}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="col-md-6 text-center">
                                        <span id="surround">
                                            <span id="initial">
                                                <Image
                                                    src="/1.1.png"
                                                    alt="Vercel Logo"
                                                    width={233}
                                                    height={309}
                                                    priority/>
                                            </span>
                                            <span id="onhover">
                                                {/* <Image
                                                    src="/1.png"
                                                    alt="Vercel Logo"
                                                    width={233}
                                                    height={309}
                                                    priority/> */}
                                            </span>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mid-section-orb">
                                <div className="stick stick-white reveal reveal-down">
                                    <h5 className="reveal reveal-right">Orbs of Z</h5>
                                    <p className="reveal reveal-up">When the planet was attacked, eight Orbs of great force and energy were
                                        released by the New Order. When collected, it grants the holder incredible
                                        power corresponding to the force each Orb contains. The people of Z
                                        had to gather them all to stand a chance for survival against this evil that
                                        has taken over.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container home-page-container orb-of-z" style={{["paddingBottom" as any]: "50px"}}>
                    <div className="row">
                        <div className="col-md-12 orbofz-images">
                            <div>
                                <span id="surround">
                                    <span id="initial">
                                        <Image
                                            src="/1.1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/>
                                    </span>
                                    <span id="onhover">
                                        {/* <Image
                                            src="/1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/> */}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span id="surround">
                                    <span id="initial">
                                        <Image
                                            src="/1.1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/>
                                    </span>
                                    <span id="onhover">
                                        {/* <Image
                                            src="/1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/> */}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span id="surround">
                                    <span id="initial">
                                        <Image
                                            src="/1.1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/>
                                    </span>
                                    <span id="onhover">
                                        {/* <Image
                                            src="/1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/> */}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span id="surround">
                                    <span id="initial">
                                        <Image
                                            src="/1.1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/>
                                    </span>
                                    <span id="onhover">
                                        {/* <Image
                                            src="/1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/> */}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span id="surround">
                                    <span id="initial">
                                        <Image
                                            src="/1.1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/>
                                    </span>
                                    <span id="onhover">
                                        {/* <Image
                                            src="/1.png"
                                            alt="Vercel Logo"
                                            width={233}
                                            height={309}
                                            priority/> */}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="box container bg-black">
                    <div className="box1">
                        <span >
                            <Image
                                src="/2.png"
                                alt="Vercel Logo"
                                width={377}
                                height={420}
                                priority
                            />
                        </span>
                    </div>
                    <div className="box2">
                        <div className="innerBox">
                            <div className="ramen-section">
                                <div className="stick stick-white reveal reveal-down">
                                    <h5 className="reveal reveal-right">Ramen Shop</h5>
                                    <p className="reveal reveal-up">The known world, a barren land, comes wanderers from another universe seeking
                                        answers for the lost world. In their journey, they have stumbled upon a
                                        peculiar place, a ramen shop run by an old man. Little did they know,
                                        that place holds all secrets for they have encountered one of the SoulZ
                                        warriors, the Keeper of Secrets. From here on, history unfolds..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box3">
                        <span >
                            <Image
                                src="/3.png"
                                alt="Vercel Logo"
                                width={377}
                                height={420}
                                priority
                            />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}