import { useNavigate } from "react-router-dom"

const Hero = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/work');
    }

    return (
        <section className='hero-section'>
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className='title'>Adaptive Logo Design for Your Brand</h1>
                    <button className='hero-btn' type='button' onClick={handleClick}>
                        Explore works
                        <img src="../assets/arrow-icon.svg" alt="arrow-icon" />
                    </button>
                </div>
                <img src="./assets/blur.svg" alt="blur-img" className='hero-img' />
            </div>
        </section>
    )
}

export default Hero
