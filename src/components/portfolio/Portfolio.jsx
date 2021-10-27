import { useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { 
    designPortfolio,
    webPortfolio,
    mobilePortfolio,
    threeDPortfolio,
    contentPortfolio
} from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("design");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "design",
            title: "Design",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "threeD",
            title: "3D Visuals",
        },
        {
            id: "content",
            title: "Content Creator",
        },

    ];

    useEffect (() => {

        switch(selected){
            case "design":
                setData(designPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "threeD":
                setData(threeDPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default: 
                setData(designPortfolio);
        }

    }),[selected];

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src="{d.img}" alt="banking-app-photo" />
                        <h3>{d.title}</h3>
                    </div>
                ))}

            </div>

        </div>
    );
}
