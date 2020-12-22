
export default function Footer() {
    return (
        <footer>
            <img className="footerImage" src="/images/meneds_logo.png" alt="meneds logo" />
            <div className="contactInfo">
                <div className="newsletterButton">
                    <a href="https://meneds.us12.list-manage.com/subscribe/post?u=ae74c137a4d966471d83ecc46&id=1de5eef385" target="_blank">
                        NEWSLETTER SIGN UP
                    </a>
                </div>
                <div className="socialIconsContainer">
                    <a href="https://www.facebook.com/menedspizzeria" target="_blank"><img src="/images/fb.png" alt="facebook icon" height="36px" /></a>
                    <a href="https://www.instagram.com/menedspizzeria/" target="_blank"><img src="/images/ig.png" alt="instagram icon" height="36px" /></a>
                    <a href="https://twitter.com/menedspizzeria" target="_blank"><img src="/images/tw.png" alt="twitter icon" height="36px" /></a>
                </div>
            </div>

        </footer>
    )
}