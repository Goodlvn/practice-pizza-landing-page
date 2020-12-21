import Map from "./subComponents/Map";

export default function Location() {
    return (
        <section className="locationContainer">
            <h2 className="menuTitle hasAfter">LOCATION</h2>
            <div className="locationContent">
                <div className="mapContext">
                    <div>
                        <div className="orderButton">
                            <a href="https://www.meneds.com/" target="_blank">ORDER ONLINE</a>
                        </div>
                        <h3>4115 PARAMOUNT BLVD, LAKEWOOD, CA 90712</h3>
                        <h3 className="tel"><a href="tel:+15624218908">(562) 421-8908</a></h3>
                    </div>
                    <div className="hours">
                        <h3>HOURS</h3>
                        <p>SUNDAY - THURSDAY 11AM - 9PM FRIDAY & SATURDAYS 11AM - 10PM</p>
                    </div>
                </div>
                <div className="map">
                    <Map />
                </div>
            </div>
        </section>
    )
}