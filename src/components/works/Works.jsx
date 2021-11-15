import { useState } from "react";
import "./works.scss";

const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/desktop_windows_black_24dp.svg",
            title: "Desktop Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel iste natus animi voluptas pariatur ab illo commodi corrupti deleniti eos!",
            img: "assets/desktop.png"
        },
        {
            id: "2",
            icon: "./assets/phone_iphone_black_24dp.svg",
            title: "Mobile Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel iste natus animi voluptas pariatur ab illo commodi corrupti deleniti eos!",
            img: "assets/2.png"
        },
        {
            id: "3",
            icon: "./assets/laptop_black_24dp.svg",
            title: "Laptop Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel iste natus animi voluptas pariatur ab illo commodi corrupti deleniti eos!",
            img: "assets/lap.png"
        },

    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : 
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrow_back_ios_black_24dp.svg" className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src="assets/arrow_forward_ios_black_24dp.svg" className="arrow right" alt="" onClick={() => handleClick()}/>
        </div>
    )
}

export default Works 
