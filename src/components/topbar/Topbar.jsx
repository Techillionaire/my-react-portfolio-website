import "./topbar.scss";
import {} from "@material-ui/icons";

const Topbar = () => {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">1Barth.</a>
                    <div className="itemContainer">
                        <Person />
                        <span>+234 705 859 0718</span> 
                    </div>
                </div>

                <div className="right">

                </div>
            </div>
            
            
        </div>
    )
}

export default Topbar
