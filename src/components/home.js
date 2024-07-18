import { useEffect, useState } from 'react'
import '../scss/global.css'
import Button from '../utils/Button'
import resume from '../assets/CV_Rohit Kumar_Frontend.pdf'

const Home = () =>{

    const [style, setStyle] = useState('')
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");

    const role = "Frontend Developer";
    const Roles = role.split("");

    function displayCharacter() {
        if (index < role.length) {
        setIndex(index + 1);
        setText(text.concat(Roles[index]));
        } else if (index == role.length) {
        setIndex(0);
        setText("");
        }
    }

    useEffect(() => {
        let interval = setInterval(displayCharacter, 250);

        return () => clearInterval(interval);
    }, [index]);

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
                <p id='profile-desc'>I'm an aspiring <span style={{color:"#0548f2"}}>{text}</span></p>
                <Button className="btn-about-me" onclick={downloadResume}>Download Resume</Button>
            </div>     
        </section>
    )
}

export default Home