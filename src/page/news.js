import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList"
import NewsList2 from "../components/newsList2";

const NewsPage ={
   async render(){
        return /*html*/`
        <div class=" m-auto">
            ${MenuList.render()}
            ${Banner.render()}
            ${await NewsList.render()}
            ${await NewsList2.render()}
            ${Footer.render()}
        </div>    
        `
    }
};
export default NewsPage;