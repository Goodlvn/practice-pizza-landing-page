import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Menu from "../components/Menu";


export default function Index() {
    return (
        <div className="BigPoppaContainer">
            <Header />
            <Slideshow />
            <Menu />
        </div>
    )
}