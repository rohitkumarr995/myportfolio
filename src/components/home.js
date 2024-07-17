import { useEffect, useState } from 'react'
import '../scss/global.css'
import Button from '../utils/Button'
import resume from '../assets/CV_Rohit Kumar_Frontend.pdf'

const Home = () =>{

    const [style, setStyle] = useState('')

    useEffect(()=>{
        setStyle('zoom-it')
    },[])

    const downloadResume = () =>{
        const pdfUrl = resume;
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'CV_Rohit Kumar_Frontend.pdf'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return(

        <section className="landing-page">
            <div className={`landing-container ${style}`}>
                <h1 id='name'>Rohit Kumar</h1>
                <p id='profile-desc'>I'm a professional Software Engineer from Noida</p>
                <Button className="btn-about-me" onclick={downloadResume}>Download Resume</Button>
            </div>     
        </section>
    )
}

export default Home