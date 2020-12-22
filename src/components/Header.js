
export default function Header() {
    return (
        <header className="container">
            <img className="headerLogo" src="/images/meneds_logo.png" alt="meneds logo" />

            <ul className="navList">
                <li className="navItem">
                    <a className="navLink" href="#menu">
                        Menu
                    </a>
                </li>
                <li className="navItem">
                    <a className="navLink" href="#location">Location</a>
                </li>
            </ul>
        </header >
    )
}