import Banner from "../components/banner";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList"

const NewsPage ={
    print(){
        return /*html*/`
        <div class=" m-auto">
            ${MenuList.print()}
            ${Banner.print()}
            ${NewsList.print()};
        </div>    
        `
    }
};
export default NewsPage;