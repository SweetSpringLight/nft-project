import Image from 'next/image'
import React from "react";
export default function Footer (){
    return (
        <>
            <div id="faq">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 footer-section">
                            <h4 className='reveal reveal-up'>FAQ</h4>
                            <div className="tabs reveal reveal-right">
                                <div className="tab">
                                    <input type="checkbox" id="chck1" />
                                    <label className="tab-label" htmlFor="chck1">1. What Blockchain Will SoulZ Be On?</label>
                                    <div className="tab-content">
                                        <hr className="faq-line" />Ethereum
                                    </div>
                                </div>
                                <div className="tab reveal reveal-left">
                                    <input type="checkbox" id="chck2" />
                                    <label className="tab-label" htmlFor="chck2">2. When Will Mint Be?</label>
                                    <div className="tab-content">
                                        <hr className="faq-line" />Dutch Auction: 20 February 2022 <br />Ascended &amp;
                                            Collected SoulZ: 21 February 2022
                                    </div>
                                </div>
                                <div className="tab reveal reveal-right">
                                    <input type="checkbox" id="chck3" />
                                    <label className="tab-label" htmlFor="chck3">3. How Much will the Mint be?</label>
                                    <div className="tab-content">
                                        <hr className="faq-line" />Dutch Auction 0.75E - 0.2E <br />Whitelist 0.2E
                                    </div>
                                </div>
                                <div className="tab reveal reveal-left">
                                    <input type="checkbox" id="chck4" />
                                    <label className="tab-label" htmlFor="chck4">4. How Many SoulZ will there be?</label>
                                    <div className="tab-content">
                                        <hr className="faq-line" />7,777
                                    </div>
                                </div>
                                <div className="tab reveal reveal-right">
                                    <input type="checkbox" id="chck5" />
                                    <label className="tab-label" htmlFor="chck5">5. How Many Can I Mint?</label>
                                    <div className="tab-content">
                                        <hr className="faq-line" />The Collected SoulZ Whitelist members can mint 2
                                            SoulZ at pre-sale.<br />Ascended WL members can mint 1 at
                                            pre-sale.<br />Public mint will be capped at 3 per transaction
                                    </div>
                                </div>
                                <div className="tab reveal reveal-left">
                                    <input type="checkbox" id="chck6" />
                                    <label className="tab-label" htmlFor="chck6">6. Where Can I Mint a SoulZ?</label>
                                    <div className="tab-content">
                                        <hr className="faq-line" />Contract address is <br />
                                            <a
                                                href="https://etherscan.io/address/0xa5c807a62cd6774d6bf518dd2dec0ae17446ad8d">
                                            </a><br />Or click the mint link above
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-12 footer-section">
                                            <div className="container">
                                                <hr className="line-style" />
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="footer-left">
                                                            <div className="footer-contact">Contact: </div>
                                                            <div className="footer-email"><a
                                                                    href="mailto:Soulznft@gmail.com">Soulznft@gmail.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="footer-right">
                                                            <div className="footer-follow">
                                                                Follow:
                                                            </div>
                                                            <div className="footer-social">
                                                                <div>
                                                                    <a href='#'>
                                                                        <Image
                                                                            src="/twitterr.9f22fe28.svg"
                                                                            alt="Vercel Logo"
                                                                            width={27}
                                                                            height={27}
                                                                            priority
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a href='#'>
                                                                        <Image
                                                                            src="/instaa.6330c923.svg"
                                                                            alt="Vercel Logo"
                                                                            width={27}
                                                                            height={27}
                                                                            priority
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a href='#'>
                                                                        <Image
                                                                            src="/discord.0b90acbb.svg"
                                                                            alt="Vercel Logo"
                                                                            width={27}
                                                                            height={27}
                                                                            priority
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}