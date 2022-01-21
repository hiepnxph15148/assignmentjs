import Banner from "../components/banner";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList"

const NewsPage ={
   async render(){
        return /*html*/`
        <div class=" m-auto">
            ${MenuList.render()}
            ${Banner.render()}
            ${await NewsList.render()};
        </div>    
        `
    }
};
export default NewsPage;