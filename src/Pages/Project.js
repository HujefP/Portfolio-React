import Icon from '../Componant/icons/github_PNG40.png'
import Icon2 from '../Componant/icons/vercel.png'
function About() {
    return (
        <div>
            <p><h2>Below are some of my notable projects:</h2>

                <div className="card"><h4>Project Name: Movie Search Website</h4>
                    Description: Created a Movie Search Website that fetches Movies data from an API and displays it to the user. Implemented dynamic updates based on user Search and integrated responsive design for different devices.
                    <br />
                    Technologies Used: HTML, CSS, JavaScript, API integration.
                    <br />
                    See Project: <a href="https://moviesearch-kappa.vercel.app/" target="blank">click to see</a>
                    <br />
                    GitHub Repository: <a href="https://github.com/HujefP/Moviesearch" target="blank">Click Here</a>
                    <div className='card-img'>
                        <a href='https://github.com/HujefP/Moviesearch' target='blank'>
                            <img src={Icon} alt=''></img>
                        </a>
                        <a href='https://moviesearch-kappa.vercel.app/' target='blank'>
                            <img src={Icon2} alt=''></img>
                        </a>
                    </div>
                </div>
                <div className="card"><h4>Project Name: Dynamic Page</h4>
                    Description: Developed a fully functional Dynamic Page website using HTML, CSS, and JavaScript. Integrated payment gateways, shopping cart functionality, and implemented responsive design for optimal user experience.
                    <br />
                    Technologies Used: HTML, CSS, JavaScript, Bootstrap.
                    <br />
                    See Project: <a href="https://dynamic-page-beta.vercel.app/" target="blank">click to see</a>
                    <br />pp
                    GitHub Repository: <a href="https://github.com/HujefP/Dynamic-page" target="blank">Click Here</a>
                    <div className='card-img'>
                    <a href='hhttps://github.com/HujefP/Dynamic-page' target='blank'>
                        <img src={Icon} alt=''></img>
                    </a>
                    <a href='https://dynamic-page-beta.vercel.app' target='blank'>
                        <img src={Icon2} alt=''></img>
                    </a>
                </div> </div>
              
                

                <div className="card"><h4>Project Name: My Portfolio Website</h4>
                    Description: Designed and built a personal portfolio website to showcase my skills and projects. Implemented responsive design, animations, and integrated GitHub repositories to display my projects dynamically.
                    <br />
                    Technologies Used: HTML, CSS, JavaScript.
                    <br />
                    See Project: <a href="https://my-portfoli-rho.vercel.app/" target="blank">click to see</a>
                    <br />
                    GitHub Repository: <a href="https://github.com/HujefP/Profile-portfoli" target="blank">Click Here</a>
                    <div className='card-img'>
                        <a href='https://github.com/HujefP/Profile-portfoli' target='blank'>
                            <img src={Icon} alt=''></img>
                        </a>
                        <a href='https://my-portfoli-rho.vercel.app/' target='blank'>
                            <img src={Icon2} alt=''></img>
                        </a>
                    </div>
                </div>

                <div className="card"><h4>Project Name: FoodOrder Website</h4>
                    Description: Designed and built a Food Order website to showcase my skills and projects. Implemented responsive design, animations, and integrated GitHub repositories to display my projects dynamically.
                    <br />
                    Technologies Used: HTML, CSS, JavaScript, React, GitHub API.
                    <br />
                    See Project: <a href="https://my-portfoli-rho.vercel.app/" target="blank">click to see</a>
                    <br />
                    GitHub Repository: <a href="https://github.com/HujefP/react-intro" target="blank">Click Here</a>
                    <div className='card-img'>
                        <a href='https://github.com/HujefP/react-intro' target='blank'>
                            <img src={Icon} alt=''></img>
                        </a>
                        <a href='https://my-portfoli-rho.vercel.app/' target='blank'>
                            <img src={Icon2} alt=''></img>
                        </a>
                    </div>
                    </div>

                Feel free to explore the projects by visiting the GitHub repositories linked above. You can find more of my work on my GitHub profile:<a href="https://github.com/HujefP" target="blank"> View Profile</a>.
            </p>
            <div>
                <p>Thank you for visiting my portfolio! I'm excited to collaborate on exciting web development projects.</p>
            </div>
        </div>

    )
}

export default About;