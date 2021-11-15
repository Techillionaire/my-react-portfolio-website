import "./testimonials.scss"

const Testimonials = () => {

    const data = [
        {
            id: 1,
            name: "Joseph Brisibe",
            title: "Front-end Engineer",
            img: "./assets/Joseph.png",
            icon: "./assets/twitter.png",
            desc: "Lorem Ipsum, Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum, Lorem Ipsum"
        },
        {
            id: 2,
            name: "Ebenezer Ugo",
            title: "Senior Developer",
            img: "./assets/Ebenezer.png",
            icon: "./assets/linkedin.png",
            desc: "Lorem Ipsum, Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum, Lorem Ipsum",
            featured: true
        },
        {
            id: 3,
            name: "Segun Light",
            title: "Tech Writer",
            img: "./assets/Light.png",
            icon: "./assets/youtube.png",
            desc: "Lorem Ipsum, Lorem Ipsum Lorem Ipsum, Lorem Ipsum Lorem Ipsum, Lorem Ipsum"
        },
    ];


    return (
        <div className="testimonial" id="testimonial">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="./assets/right-drawn-arrow.png" className="left" alt="" />
                        <img src={d.img} className="user" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
