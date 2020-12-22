import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Menu from "../components/Menu";
import Signature from "../components/Signiture";
import Featured from "../components/Featured";
import Drinks from "../components/Drinks";
import Location from "../components/Location";
import Footer from "../components/Footer";


export default function Index() {
    return (
        <div className="BigPoppaContainer">
            <Header />
            <Slideshow />
            <Menu />
            <Signature />
            <Featured />
            <Drinks />
            <Location />
            <Footer />
        </div>
    )
}