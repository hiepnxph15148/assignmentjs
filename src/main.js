import Navigo from "navigo";
import AboutPage from "./page/about";
import AddNews from "./page/addnews";
import AdminNews from "./page/adminew";
import Dashboard from "./page/dashboard";
import DetailNewsPage from "./page/detailpage";
import EditNews from "./page/editnews";
import HomePage from "./page/home";
import NewsPage from "./page/news";
import SignIn from "./page/signin";
import SignUp from "./page/signup";

const router = new Navigo("/", {linksSelector: "a"});
// const render = (content) => {
const print = async(content,id)=>{
    // document.getElementById("header").innerHTML = MenuList.print();
    document.getElementById("app").innerHTML = await content.print(id);
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
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        render(EditNews.print(id));
    },
});
router.resolve();