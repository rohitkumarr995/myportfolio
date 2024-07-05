import '../scss/global.css'
import BinaryTranslator from '../assets/binary-translator.png'
import XCart from '../assets/xcart.png'
import Portfolio from '../assets/portfolio.png'
import Button from '../utils/Button.js'
import { useEffect, useState } from 'react'

const Services = () =>{
    const [opacity, setOpacity] = useState(false)

    useEffect(()=>{
        setOpacity(true)
        window.scrollTo(0,0);
    },[])

    const handleNavigation = (url) =>{
        window.location.href = url;
    }

    return (
        <>
        <section className= {`fade-in ${opacity ? 'visible' : ''} services-main-container`}>
            <div className="services-headline-desc">
                <h2 id="headline-title">Services</h2>
                <p id="headline-desc">Experienced Systems Engineer with expertise in automation testing and framework development using Selenium. Proven skills in creating and maintaining test scripts, logging bugs in Jira, and managing version control with GitHub. Previous roles include Software Test Engineer and Associate, with a solid foundation in project management and quality assurance.</p>
            </div>
            <div className="services-card-section">
                <div className="service-card">
                    <div className="img-content">
                        <img src={BinaryTranslator} alt="" />
                    </div>
                    <div className="card-content">
                        <h1 className='card-heading'>Binary Translator</h1>
                        <Button onclick={()=>handleNavigation('https://binary-translator-ebon.vercel.app/')} className="btn-services">Visit Me</Button>
                    </div>
                </div>
                <div className="service-card">
                    <div className="img-content">
                        <img src={XCart} alt="" />
                    </div>
                    <div className="card-content">
                        <h1 className='card-heading'>X-Cart</h1>
                        <Button onclick={()=>handleNavigation('https://xcart-client-henna.vercel.app/ind/home')} className="btn-services">Visit Me</Button>
                    </div>
                </div>
                <div className="service-card">
                    <div className="img-content">
                        <img src={Portfolio} alt="" />
                    </div>
                    <div className="card-content">
                        <h1 className='card-heading'>Portfolio</h1>
                        <Button onclick={()=>handleNavigation('http://localhost:3000/home')} className="btn-services">Visit Me</Button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services