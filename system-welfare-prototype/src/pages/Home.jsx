import '../assets/styles/Home.css'

function Home(){
    return(
        <main>
            <div className="main-about-section">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis harum necessitatibus ipsum excepturi voluptates cumque debitis, vel reiciendis non illo nemo ipsam dolorum! Perferendis, est doloribus fugit voluptate nobis eaque?</p>
                <img className="about--image"/>
            </div>

            <div className="main-getStarted-section">
                <h1>Need financial assitance?</h1>
                <a href="#">Click here to get started</a>
            </div>
        </main>
    )
}

export default Home