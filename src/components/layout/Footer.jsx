import '../../App.css'

const Footer = () => {

    return (
        <footer className='footer-section'>
            <div className="footer-info">
                <p className='title'>Get in Touch With Us</p>
                <h2 className='footer-heading title'>info@aaronn.com</h2>
            </div>
            <div className="footer-link">
                <div className="column-logo">
                    <img src="./assets/logo.svg" alt="logo" className='footer-logo' />
                </div>
                <div className="column">
                    <p className='title'>Street Avenue 21, CA</p>
                    <p className='title'>0-8-00-888-</p>
                    <p className='title'>ooo</p>
                </div>
                <div className="column">
                    <p className='title'>+9 0283353</p>
                    <div className="footer-social-icon">
                        <img src="./assets/facebook.svg" alt="facebook" />
                        <img src="./assets/instagram.svg" alt="instagram" />
                        <img src="./assets/twitter.svg" alt="twitter" />
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <p>© 2023. Ideapeel. All rights reserved. </p>
            </div>
        </footer>
    )
}

export default Footer
