

const About = () => {
    return (
        <section className='about-section'>
            <div className='about-info'>
                <div className="about-info-line">
                    <h1 className='title'>About Me</h1>
                    <p>Little Brief About Myself</p>
                    <img src="./assets/blur.svg" alt="blur" className='about-blur-img' />
                </div>
                <hr />
            </div>
            <div className="about-main-container">
                <div className="about-main-content">
                    <h1 className="title">My mission is to make design easier.</h1>
                    <p>
                        Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can
                        easily select a logo without hassle. Create custom landing logos with AARONN that converts more visitors than any
                        website. With lots of revisions, you can easily build a logo without porbolem.
                    </p>
                </div>
                <div className="about-main-img">
                    <img src="./assets/man-img-1.svg" alt="man-1" className="about-img-1" />
                    <img src="./assets/man-img-2.svg" alt="man-2" className="about-img-2" />
                    <div className='about-vertical'></div>
                    <div className='about-horizontal'></div>
                </div>
            </div>
            <div className="about-detail">
                <h1 className='title'>Follow me on:</h1>
                <div className="about-follower">
                    <p className='dribble'>DRIBBLE</p>
                    <p className='twitter'>TWITTER</p>
                    <p className='facebook'>FACEBOOK</p>
                    <p className='instagram'>INSTAGRAM</p>
                </div>
            </div>
        </section>
    )
}

export default About
