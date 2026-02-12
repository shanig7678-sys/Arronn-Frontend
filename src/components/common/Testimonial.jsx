import '../../App.css'

const Testimonial = () => {
    return (
        <section className='testimonial-section'>
            <div className="testimonial-container">
                <div className="testimonial-content">
                    <h2 className='testimonial-title title'>Testimonial</h2>
                    <p className='testimonial-desc'>
                        “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered.
                        I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I
                        was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying
                        simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and
                        professionalism. I would recommend him to anyone looking for a design!”
                    </p>
                    <p className='testimonial-author title'>-Martin lee</p>
                </div>
                <img src="./assets/quote.svg" alt="quote" className='quote' />
            </div>
            <img src="./assets/blur.svg" alt="blur" className='blur-img' />
        </section>
    )
}

export default Testimonial
