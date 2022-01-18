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
const render = (content) => {
    // document.getElementById("header").innerHTML = MenuList.print();
    document.getElementById("app").innerHTML = content;
}
router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    "/news": () => {
        render(NewsPage.print());
    },
    "/signin": () => {
        render(SignIn.print())
    },
    "/signup": () => {
        render(SignUp.print())
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        render(DetailNewsPage.print(id));
    },
    "/admin/dashboard": () => {
        render(Dashboard.print())
    },
    "/admin/news": () => {
        render(AdminNews.print())
    },
    "/admin/news/add": () => {
        render(AddNews.print())
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        render(EditNews.print(id));
    },
});
router.resolve();