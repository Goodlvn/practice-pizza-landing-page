import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Menu from "../components/Menu";
import Signature from "../components/Signiture";
import Featured from "../components/Featured";


export default function Index() {
    return (
        <div className="BigPoppaContainer">
            <Header />
            <Slideshow />
            <Menu />
            <Signature />
            <Featured />
        </div>
    )
}