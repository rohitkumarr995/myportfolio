import { AxiosIcon, CSSIcon, GitIcon, GithubIcon, HTMLIcon, JavascriptIcon, JestIcon, MongoIcon, MySQLIcon, NPMIcon, NextIcon, NodeJSIcon, PostmanIcon, ReactIcon, ReduxIcon, SassIcon, TailwindIcon, TypescriptIcon, WebpackIcon } from "../utils/Devicon"
import profileImg from '../assets/rohit.jpg'
import '../scss/global.css'
import { useEffect, useState } from "react"

const { Link } = require("react-router-dom")

const About = () =>{
    const [opacity, setOpacity] = useState(false)

    useEffect(()=>{
        setOpacity(true)
        window.scrollTo(0,0)
    },[])

    return(
        <>
            <section className= {`fade-in ${opacity ? 'visible' : ''} about-main-container`}>
                <div className="about-section">
                    <h2 id="about-id">About</h2>
                    <div className="headline">
                        <p>With a strong foundation in QA testing, I am transitioning towards a full stack developer role. I possess extensive
                            expertise in ReactJS and ExpressJS and I am actively expanding my skill set to include a broader range of web
                            development technologies. Eager to leverage my skills in crafting engaging digital solutions, I am enthusiastic about
                            the promising path ahead in full stack development.
                        </p>
                    </div>

                    <div className="about-sub">
                        <div className="about-image-container">
                            <img src={profileImg} alt="profile image"/>
                        </div>
                        <div className="about-details-container">
                            <div className="title">
                                <h2 className="about-title">Frontend Developer</h2>
                                <p className="description">
                                I am an aspiring <span id="profile-role">Frontend Developer</span>.
                                </p>
                                <div className="personal-details">
                                    <div className="detail-1">
                                        <ul>
                                            <li><span>Birthday</span> : 10 April 1995</li>
                                            <li><span>Website</span> : <Link to={"https://portfolio-nu-gules-17.vercel.app/home"}>Visit Me</Link></li>
                                            <li><span>Phone</span> : +91-7906916680</li>
                                            <li><span>City</span> : Agra, Uttar Pradesh</li>
                                        </ul>
                                    </div>
                                    <div className="detail-2">
                                        <ul>
                                            <li><span>Age</span> : 29</li>
                                            <li><span>Degree</span> : Bechelor of Technology</li>
                                            <li><span>Email</span> : rkrs227@gmail.com</li>
                                            <li><span>Freelance</span> : Available</li>
                                        </ul>
                                    </div>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "skills-section">
                    <h2>SKILLS</h2>
                    <div className="headline">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur corporis, libero sequi quasi ut totam, accusamus error rem sint neque ex porro quibusdam eum at enim quisquam vitae excepturi?</p>
                    </div>
                    <div className="skills-containers">
                        <div className="skills-container-tier">
                            <span><HTMLIcon/></span>
                            <span><CSSIcon/></span>
                            <span><SassIcon/></span>
                            <span><TailwindIcon/></span>
                            <span><JavascriptIcon/></span>
                        </div>
                        <div className="skills-container-tier">
                            <span><TypescriptIcon/></span>
                            <span><ReactIcon/></span>
                            <span><ReduxIcon/></span>
                            <span><AxiosIcon/></span>
                            <span><NodeJSIcon/></span>
                        </div>
                        <div className="skills-container-tier">
                            <span><MySQLIcon/></span>
                            <span><MongoIcon/></span>
                            <span><NextIcon/></span>
                            <span><WebpackIcon/></span>
                            <span><JestIcon/></span>
                        </div>
                        <div className="skills-container-tier">                         
                            <span><PostmanIcon/></span>
                            <span><GitIcon/></span>
                            <span><GithubIcon/></span>
                            <span><NPMIcon/></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About