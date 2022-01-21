import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList";

const HomePage = {
   async render() {
        return `
            <div>
            ${MenuList.render()}
            </div>
            <div>
            ${Banner.render()}
            </div>
            <div>
            ${await NewsList.render()}
            </div>
            <div>
            ${Footer.render()}
        </div>    
        `
    },
};
export default HomePage;