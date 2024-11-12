
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer_main' style={{ backgroundColor: "#131039" }}>
            <div className='footer_child'>
                <p className='footer_heading'>HELP & INFORMATION</p>
                <a  className='footer_link_style' >Request a Call Back!</a>
                <a  className='footer_link_style' >Contact Us</a>
                <a  className='footer_link_style' >FAQ & Help Center</a>
            </div>
            {/* 2 */}
            <div className='footer_child'>
                <p className='footer_heading'>ABOUT DESIGN</p>
                <a className='footer_link_style' >About Us</a>
                <a className='footer_link_style' >Privacy Statement</a>
                <a className='footer_link_style' >Terms & Conditions</a>
                <a className='footer_link_style' >Returns & Refunds</a>
            </div>
            {/* app Link */}
            <div className='footer_child'>

                <p className='footer_heading'>DOWNLOAD OUR APP</p>
                <div className='image_flex_footer'>
                    <a className='footer_link_style'> <img className='appStore_img' alt='googlePlay' src='https://www.clicky.pk/_nuxt/img/googleplay.3eb27f7.png' /></a>
                    <a className='footer_link_style'> <img className='appStore_img' alt='appleStore' src='https://www.clicky.pk/_nuxt/img/appstore.91f0e59.png' /></a>
                </div>
                <p className='footer_heading'>KEEP IN TOUCH!</p>

            </div>
            {/* 3 */}
            <div className='footer_child'>
                <p className='footer_heading'>MORE FROM DESIGN</p>
                <a className='footer_link_style'>Sell on Design</a>
                <a className='footer_link_style'>Buissness Pathners</a>
            </div>
            {/* 4 */}
            <div className='footer_child'>
                <p className='footer_heading'>SHOPPING FROM</p>
                <p>You're in <span className='footer_link_style' >Pakistan</span>  </p>

            </div>
        </footer>
    )
}

export default Footer