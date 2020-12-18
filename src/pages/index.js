import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Menu from "../components/Menu";
import Signature from "../components/Signiture";


export default function Index() {
    return (
        <div className="BigPoppaContainer">
            <Header />
            <Slideshow />
            <Menu />
            <Signature />
        </div>
    )
}