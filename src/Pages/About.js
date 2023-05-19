import Icon from '../Componant/icons/bootstrp.png'
import Icon2 from '../Componant/icons/css.jpg'
import Icon3 from '../Componant/icons/HTML5_badge.png'
import Icon4 from '../Componant/icons/js.jpg'
import Icon5 from '../Componant/icons/react.png'
import Icon6 from '../Componant/icons/node.png'
import Icon7 from '../Componant/icons/mongodb-3-1175138.webp'
import Icon8 from '../Componant/icons/vercel.png'
import Icon9 from '../Componant/icons/github_PNG40.png'
function About() {
    return (
        <div >
            <h1>About Me</h1>
            <p>Hi Everyone My name is <strong>Hujef Patel</strong>  </p>
            <p className="about">Work Experience:
                <br />
                Job title: System Engineer.
                <br />
                Company/Organization: Infosys Limited.
                <br />
                Duration: Since May 2022.
                <br />
                <ul>
                    <li> Description: Currently working in Infosys as a System Engineer.</li>
                    <li>Good Knowledge on HTML, CSS, JavaScript, React js, Node Js and github</li>
                    <li>Having Some Strenghts are Effective communication, working closely with people, easily adopt new tools</li>
                    <li>Complete work with passion and fulfill buisness.</li>
                </ul>

            </p>
            <p className="about">
                Education:
                <ul>
                    <li>
                        Bachelor Of Engineering in Mechanical at Pune University in 2021.
                    </li>
                    <li>Diploma in mechanical at Mumbai univarsity in 2018.</li>
                </ul>
            </p>
            <p className="about flex">
                
                <ul>
                Courses Completed:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                </ul>
                <div className='grid'>
                <img src={Icon3} alt=''></img>
                <img src={Icon2} alt=''></img>
                <img src={Icon4} alt=''></img>
                <img src={Icon} alt=''></img>
                <img src={Icon5} alt=''></img>
                <img src={Icon6} alt=''></img>
                <img src={Icon7} alt=''></img>
                <img src={Icon8} alt=''></img>
                <img src={Icon9} alt=''></img>
                </div>
            </p>

            <div>

                <p>Thank you for visiting my portfolio! I'm excited to collaborate on exciting web development projects.</p>
            </div>
        </div>

    )
}

export default About;