import "./login.css"

export default function login() {

    return(
        <div className="login--container">
            
            <h2 
                className="title">Podcast</h2>
            <p className="description">Listen to your favourite podcasts anywhere</p>
            <button 
                className="login--button">Login</button>
            <button 
                className="signup--button">Sign up</button>
        </div>
    )
}