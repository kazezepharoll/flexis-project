import { useNavigate } from "react-router-dom"
import laugh from "../assets/thumbnails/laugh.webp"
import Header from "./Header"

export default function LoggedInPage(){
    const navigate = useNavigate();
    return(<>
        <div className="container-fluid fs-1 text-dark Tro">
            <button onClick={()=>{ navigate("/") }}>back</button>
            <div className="marg">
            <h1 >HAHA  Let me just remind you that it's fools day today!.</h1>
            <div className="img">
            <img src={laugh} alt="NOt found" width={200} height={200}/>
            </div>
            
            </div>
            
        </div>
        </>
    )
}