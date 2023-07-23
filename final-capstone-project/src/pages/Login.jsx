import "./login.css"
import Mic from "../assets/microphone.jpg"

export default function login() {

    function handleLogin() {

    }

    return(
        <div className="login--container">
            <img className="mic--img" src={Mic}/>
            <h2
                className="title">Podcast</h2>
            <span className="description">Listen to your favourite podcasts anywhere</span>
            <button 
                className="login--button"
                onClick={handleLogin}
            >Login</button>
            <button 
                className="signup--button">Sign up</button>
        </div>
    )
}