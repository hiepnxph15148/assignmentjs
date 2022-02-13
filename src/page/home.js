import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList";
import NewsList2 from "../components/newsList2";

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
            ${await NewsList2.render()}
            </div>
            <div>
            ${Footer.render()}
        </div>    
        `
    },
    afterRender(){
        MenuList.afteRender();
    }
};
export default HomePage;