import "./footer.scss";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "@material-ui/icons";


const Footer = () => {
    return (

        

        <div className="footer" id="footer">
            <h1>Socials</h1>
            <div className="container">
                <div className="social">
                    <Facebook onClick={facebookLink}/>
                    <Twitter onClick={twitterLink}/>
                    <Instagram onClick={instagramLink}/>
                    <Linkedin onClick={linkedinLink}/>
                    <Github onClick={githubLink}/>
                </div>
                <p>&#169; 2021 copyright all right reserved</p>
            </div>

            
            
        </div>
    )
}

export default Footer
