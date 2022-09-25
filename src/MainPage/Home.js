import "./Home.css"
import Nav from "./Nav"


function Home() {
    return (
        <>
            <div className={"site-container"}>
                <Nav page={"home"}/>
                <section>
                    <div className={"background-img"} style={{
                        background: "linear-gradient(180deg, rgba(26, 15, 75, 0.95) 0%, #83548C 100%)",
                    }}>
                        <img src={"./static/images/Background.png"} alt={"UBC Design League Logo"} style={{
                            objectFit: "contain",
                            width: "100%",
                            position: "static",
                        }}/>
                    </div>
                </section>
                <section>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        display: "flex",
                    }}>

                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;