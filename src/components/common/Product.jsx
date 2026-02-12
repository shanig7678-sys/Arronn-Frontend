import ProjectData from '../../static_data/ProjectData.json'
import { useNavigate } from 'react-router-dom'
import '../../App.css'

const Project = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/project')
    }
    return (
        <section className='project-section'>
            <div className="project-content">
                <h1 className='project-heading title'>My Projects Highlight</h1>
                <button className='product-btn' onClick={handleClick}>
                    Explore me
                    <img src="./assets/arrow-icon.svg" alt="arrow-icon" />
                </button>
                <img src="./assets/blur.svg" alt="blur" className='project-blur-img' />
            </div>
            <div className="project-card-container">
                {
                    ProjectData.map((curValue) => {
                        const { id, img, client, work, title } = curValue;
                        return (
                            <div className="product-card" key={id}>
                                <div className="img">
                                    <img src={img} alt={title} />
                                </div>
                                <div className="product-card-content">
                                    <div className="product-title">
                                        <h1 className='product-heading title'>{title}</h1>
                                        <hr className='divider' />
                                    </div>
                                    <div className='product-detail'>
                                        <p className='product-client'><span>Client:  </span> {client}</p>
                                        <p className='product-work'><span>Work:  </span> {work}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project
