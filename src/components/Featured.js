export default function Featured() {
    return (
        <section className="feature">
            <div className="featureContainer">
                <div>
                    <img className="featuredImages" src="/images/bites.png" alt="cheesy bread" />
                </div>
                <ul className="featuredDetailsContainer">
                    <h2 className="featuredSubTitle menuSubTitle">SIDES</h2>
                    <li>GARLIC BREAD 5.00</li>
                    <li>GARLIC CHEESE BREAD 6.00</li>
                    <li>GARLIC CHEESY BITES 6.00</li>
                    <li>TOSSED SALAD 3.25</li>
                    <li>POTATO WEDGES</li>
                    <li className="featuredItemInfo">COMING SOON</li>
                    <li>WINGS</li>
                    <li className="featuredItemInfo">COMING SOON</li>
                    <li>HOME-MADE RANCH  .63</li>
                    <li>JALAPEÑOS .63</li>
                </ul>
            </div>
            <div className="featureContainer reverseWrap">
                <div>
                    <img className="featuredImages" src="/images/sub.png" alt="sub sandwich" />
                </div>
                <ul className="featuredDetailsContainer">
                    <h2 className="featuredSubTitle menuSubTitle">SANDWICHES</h2>
                    <li>SUB SANDWICH 6.00</li>
                    <li>GARLIC CHEESE BREAD 6.00</li>
                    <li>HAM CHEESE 6.00</li>
                    <li>PIZZA SANDWICH 6.25</li>
                </ul>
            </div>
            <div className="featureContainer">
                <div>
                    <img className="featuredImages" src="/images/pepperoni_box.png" alt="pepperoni pizza" />
                </div>
                <ul className="featuredDetailsContainer">
                    <h2 className="featuredSubTitle menuSubTitle">LUNCH SPECIALS</h2>
                    <li>MINI PIZZA 8.50</li>
                    <li className="featuredItemInfo">1-TOPPING MINI PIZZA, SALAD AND SOFT DRINK</li>
                    <li>ANY SANDWICH 8.50</li>
                    <li className="featuredItemInfo">SANDWICH, SALAD AND SOFT DRINK</li>
                    <h2 className="featuredSubTitle menuSubTitle">DESSERTS</h2>
                    <li>CINNA TREATS 5.00</li>
                    <li>MONSTER COOKIE 8.00</li>
                </ul>
            </div>
        </section>
    )
}