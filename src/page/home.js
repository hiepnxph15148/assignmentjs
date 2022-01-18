import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList";

const HomePage = {
    print() {
        return `
            <div>
            ${MenuList.print()}
            </div>
            <div>
            ${Banner.print()}
            </div>
            <div>
            ${NewsList.print()}
            </div>
            <div>
            ${Footer.print()}
        </div>    
        `
    },
};
export default HomePage;