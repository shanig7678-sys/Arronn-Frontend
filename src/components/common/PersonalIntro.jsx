import { useNavigate } from 'react-router-dom'
import '../../App.css'

const PersonalIntro = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about');
    }

    return (
        <section className='personal-section'>
            <div className="personal-container">
                <div className="personal-content">
                    <h1 className='personal-heading title'>Let’s get know about me closer</h1>
                    <p className='personal-desc title'>
                        Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her
                        wide range of work, spanning books, posters and web design.
                    </p>
                    <button className='personal-btn' type='button' onClick={handleClick}>
                        Discover More About Me
                    </button>
                </div>
                <div className="personal-img">
                    <img src="./assets/person-img.svg" alt="man-img" />
                    <div className='horizontal'></div>
                    <div className='vertical'></div>
                </div>
            </div>
            <img src="./assets/blur.svg" alt="blur" className='personal-blur-img' />
        </section>
    )
}

export default PersonalIntro
