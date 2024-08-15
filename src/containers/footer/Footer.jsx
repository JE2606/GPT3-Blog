import React from 'react'
import gpt3Logo from '../../assets/GPT-3.svg'
import './footer.css'

const Footer = () => (
    <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
            <h2 className="gradient__text">Do you want to step in to the future before others</h2>
        </div>

        <div className="gpt3__footer-btn">
            <button type='button'>Request Early Access</button>
        </div>

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="gpt3_logo" />
                <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <a href='#home'>Overons</a>
                <a href='#home'>Social Media</a>
                <a href='#home'>Counters</a>
                <a href='#home'>Contact</a>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Company</h4>
                <a href='#home'>Terms & Conditions </a>
                <a href='#home'>Privacy Policy</a>
                <a href='#home'>Contact</a>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <a href='#home'>Crechterwoord K12 182 DK Alknjkcb</a>
                <a href='#home'>085-132567</a>
                <a href='#home'>info@payme.net</a>
            </div>
        </div>

        <div className="gpt3__footer-copyright">
            <p>@2021 GPT-3. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;