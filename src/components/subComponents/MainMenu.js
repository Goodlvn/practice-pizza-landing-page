import Topping from "./Topping";
import PriceTable from "./PriceTable";
import MenuMarkers from "./MenuMarkers";

export default function MainMenu() {
    return (
        <div className="mainMenuContainer">
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

            <hr className="contentLine" />
        </div>
    )
}
