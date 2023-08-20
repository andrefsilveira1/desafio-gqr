import Content from "../components/content";
import Menu from "../components/menu";
import SideBar from "../components/sidebar";

export default function Home() {
    return (
        <>
            <Menu/>
            <div className="m-5 mt-5 d-flex main-container">

                <SideBar />
                <Content />
            </div>
        </>
    )
}