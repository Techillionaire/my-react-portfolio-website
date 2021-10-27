import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

const Intro = () => {

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Designer", "Developer", "Content Creator"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man2.png" alt="" />
                </div>

            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Kingslee Onyeka</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="assets/down.svg" alt="" />
                </a>
            </div>

            
        </div>
    )
}

export default Intro
