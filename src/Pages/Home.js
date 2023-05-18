import Img from '../Componant/img/IMG_20220517_113954.jpg'
function Home(){
    return(
        <div className='bg'>
            <img src={Img} alt='' height={200}></img>
            <h1>Hi! Hujef Patel</h1>
            <p>Hello, I'm Hujef Patel, a passionate web developer with expertise in HTML, CSS, JavaScript, React JS, Node Js and GitHub. I specialize in building responsive and user-friendly web applications. </p>
            <div>
                <p>Thank you for visiting my portfolio! I'm excited to collaborate on exciting web development projects.</p>
            </div>
        </div>
        
    )
}

export default Home;