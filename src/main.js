import Navigo from "navigo";
import AboutPage from "./page/about";
import AddNews from "./page/addnews";
import AdminNews from "./page/adminew";
import Dashboard from "./page/dashboard";
import DetailNewsPage from "./page/detailpage";
import HomePage from "./page/home";
import NewsPage from "./page/news";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import AdminEditPost from "./page/edit";

const router = new Navigo("/", {linksSelector: "a",hash});
// const render = (content) => {
const print = async(content,id)=>{
    // document.getElementById("header").innerHTML = MenuList.print();
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
}
router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/news": () => {
        print(NewsPage);
    },
    "/signin": () => {
        print(SignIn)
    },
    "/signup": () => {
        print(SignUp)
    },
    "/news/:id": (data) => print(DetailNewsPage, data.data.id),
    "/admin/dashboard": () => {
        print(Dashboard)
    },
    "/admin/news": () => {
        print(AdminNews)
    },
    "/admin/news/add": () => {
        print(AddNews)
    },
    "/admin/news/:id/edit": ({data}) => {
        print(AdminEditPost, data.id);
    },
});
router.resolve();