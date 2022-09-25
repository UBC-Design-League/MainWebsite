import Nav from "./Nav";
import "./Home.css"

function Designathon() {
    return (
        <>
            <div className={"site-container"} style={{
                width: "100%",
                height: "100%",
            }}>
                <Nav page={"designathon"}/>
                <div className={"background-img"} style={{
                    height: "100%",
                    background: "linear-gradient(180deg, rgba(26, 15, 75, 0.95) 0%, #83548C 100%)",
                }}>
                </div>
            </div>

        </>
    )
}

export default Designathon;