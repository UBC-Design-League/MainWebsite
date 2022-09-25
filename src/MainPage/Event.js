import Nav from "./Nav";
import "./Home.css"
import background from "../assets/background.png"

function Event() {
    return (
        <>
            <div className={"site-container"} style={{
                width: "100%",
                height: "100%",
            }}>
                <Nav page={"events"}/>
                <div className={background} style={{
                    height: "100%",
                    background: "linear-gradient(180deg, rgba(26, 15, 75, 0.95) 0%, #83548C 100%)",
                }}>
                </div>
            </div>

        </>
    )
}

export default Event;