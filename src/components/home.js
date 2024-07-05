import { useEffect, useState } from 'react'
import '../scss/global.css'
import { useNavigate } from 'react-router-dom'
import Button from '../utils/Button'

const Home = () =>{

    const [style, setStyle] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        setStyle('zoom-it')
    },[])

    const navigateAboutPage = () =>{
        navigate('/about')
    }

    return(

        <section className="landing-page">
            <div className={`landing-container ${style}`}>
                <h1 id='name'>Rohit Kumar</h1>
                <p id='profile-desc'>I'm a professional Software Engineer from Noida</p>
                <Button className="btn-about-me" onclick={navigateAboutPage}>About Me</Button>
            </div>     
        </section>
    )
}

export default Home