import Topping from "./Topping";
import PriceTable from "./PriceTable";
import MenuMarkers from "./MenuMarkers";

export default function MainMenu() {
    return (
        <div id="menu" className="mainMenuContainer">
            <h2 className="menuTitle hasAfter">CREATE YOUR OWN PIZZA</h2>
            <div className="baseChoicesContainer">
                <div>
                    <h2 className="menuSubTitle">SAUCES</h2>
                    <h4 className="menuText">ORIGINAL RED • ED’S GARLIC ALFREDO</h4>
                </div>
                <div>
                    <h2 className="menuSubTitle">CRUST</h2>
                    <h4 className="menuText">ORIGINAL THIN • THICK CRUST</h4>
                </div>
            </div>

            <hr className="contentLine" />

            <h2 className="menuSubTitle">FRESH TOPPINGS</h2>
            <div style={{ flexDirection: "column" }}>
                <Topping />
            </div>

            <hr className="contentLine" />

            <MenuMarkers />
            <PriceTable />

            <div className="shortContainer">
                <hr className="contentLine" />
                <p>ONE LARGE SLICE OF CHEESE PIZZA THIN CRUST: 235 CALORIES. ONE LARGE SLICE OF CHEESE PIZZA THICK CRUST: 237 CALORIES. ADD TOPPINGS TO CHEESE PIZZA FOR CALORIE COUNT. AMOUNTS ARE FOR ONE LARGE SLICE ON THIN CRUST WITH RED SAUCE.</p>
            </div>

        </div >
    )
}
