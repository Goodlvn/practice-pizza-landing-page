
export default function Drinks() {
    return (
        <section className="drinks">
            <div className="drinksContainer">
                <div className="drinksContentContainer">
                    <div className="rightDetails">
                        <ul className="drinksDetailContainer">
                            <h2 className="featuredSubTitle menuSubTitle">DRINKS</h2>
                            <li>SOFT DRINK
                        <span>2.25</span>
                            </li>
                            <li>COFEE
                        <span>1.50</span>
                            </li>
                            <li>20 OZ. SODA
                        <span>2.50</span>
                            </li>
                            <li>2 LITER
                        <span>3.75</span>
                            </li>
                            <li>4 PACK 20 OZ. DRINKS
                        <span>7.99</span>
                            </li>
                        </ul>
                    </div>

                    <div className="leftDetails">
                        <ul className="drinksDetailContainer">
                            <h2 className="featuredSubTitle menuSubTitle">WINE</h2>
                            <li>GLASS
                        <span>4.00</span>
                            </li>
                            <li>½ LITER
                        <span>8.00</span>
                            </li>
                            <hr className="drinksHr" />
                            <li>CHARDONNAY</li>
                            <li>ZINFANDEL</li>
                            <li>MERLOT</li>
                        </ul>
                    </div>
                </div>

                <div className="beerTable">
                    <h2 className="featuredSubTitle menuSubTitle beerTitle">BEER</h2>
                    <table className="beerTableDetails">
                        <thead>
                            <tr>
                                <th>DRAFT BEER</th>
                                <th>MUG</th>
                                <th className="centerBeerDeets">½ PITCHER</th>
                                <th className="centerBeerDeets">PITCHER</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DOMESTIC 4.50</td>
                                <td className="bttmbrdr">DOMESTIC</td>
                                <td className="centerBeerDeets bttmbrdr">8.00</td>
                                <td className="centerBeerDeets bttmbrdr">13.00</td>
                            </tr>
                            <tr>
                                <td>IMPORTED OR CRAFT 5.00</td>
                                <td>IMPORTED OR LOCAL CRAFT</td>
                                <td className="centerBeerDeets">10.00</td>
                                <td className="centerBeerDeets">15.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="drinksBanner">
                <img src="/images/beer.jpg" />
            </div>

        </section>
    )
}