
export default function Drinks() {
    return (
        <section className="drinksContainer">
            <div>
                <h2>DRINKS</h2>
                <ul>
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

            <div>
                <h2>WINE</h2>
                <ul>
                    <li>GLASS
                        <span>4.00</span>
                    </li>
                    <li>½ LITER
                        <span>8.00</span>
                    </li>
                    <hr className="contentLine" />
                    <li>CHARDONNAY</li>
                    <li>ZINFANDEL</li>
                    <li>MERLOT</li>
                </ul>
            </div>

        </section>
    )
}