
import Header from "./Header"
import Welcome from "./Welcome"
import '../App.css'


export default function Home(){
    return <>
    <div className="home">
    <div className="shieldContainer">
    <Header />
    <Welcome />
    </div>
    
    </div>
    
    </>
}