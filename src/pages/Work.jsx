import React from 'react'

const Work = () => {
    return (
        <section className='work-section'>
            <div className="work-info">
                <div className="work-content">
                    <h1 className='title'>My works</h1>
                    <p>Showcase about work</p>
                    <img src="./assets/blur.svg" alt="blur" className='work-blur-img' />
                </div>
                <hr />
            </div>
            <div className="work-card-container">
                <div className="row-1">
                    <div className="work-card">
                        <div className="work-card-img">
                            <img src="./assets/work-1.svg" alt="work-1" />
                        </div>
                        <div className="work-card-content">
                            <p>BLUE</p>
                            <h1>Orvillebury</h1>
                        </div>
                    </div>
                    <div className="work-card">
                        <div className="work-card-img">
                            <img src="./assets/work-2.svg" alt="work-1" />
                        </div>
                        <div className="work-card-content">
                            <p>GREEN</p>
                            <h1>West Lavada</h1>
                        </div>
                    </div>
                    <div className="work-card">
                        <div className="work-card-img">
                            <img src="./assets/work-3.svg" alt="work-1" />
                        </div>
                        <div className="work-card-content">
                            <p>AQUA</p>
                            <h1>Rempelshire</h1>
                        </div>
                    </div>
                </div>
                <div className="row-2">
                    <div className="work-card">
                        <div className="card-width-img">
                            <img src="./assets/work-4.svg" alt="work-4" />
                        </div>
                        <div className="card-width-content">
                            <p>FUCHSIA</p>
                            <h1>Buckridgeburgh</h1>
                        </div>
                    </div>
                    <div className="work-card">
                        <div className="card-width-img">
                            <img src="./assets/work-5.svg" alt="work-4" />
                        </div>
                        <div className="card-width-content">
                            <p>FUCHSIA</p>
                            <h1>Buckridgeburgh</h1>
                        </div>
                    </div>
                </div>
                <div className="row-1">
                    <div className="work-card">
                        <div className="work-card-img">
                            <img src="./assets/work-6.svg" alt="work-1" />
                        </div>
                        <div className="work-card-content">
                            <p>GREEN</p>
                            <h1>West Lavada</h1>
                        </div>
                    </div>
                    <div className="work-card">
                        <div className="work-card-img">
                            <img src="./assets/work-8.svg" alt="work-1" />
                        </div>
                        <div className="work-card-content">
                            <p>GREEN</p>
                            <h1>West Lavada</h1>
                        </div>
                    </div>
                    <div className="work-card">
                        <div className="work-card-img">
                            <img src="./assets/work-7.svg" alt="work-1" />
                        </div>
                        <div className="work-card-content">
                            <p>GREEN</p>
                            <h1>West Lavada</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
