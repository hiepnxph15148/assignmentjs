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

const router = new Navigo("/", {linksSelector: "a",hash:true});
// const render = (content) => {
const print = async(content,id)=>{
    // document.getElementById("header").innerHTML = MenuList.print();
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
}
router.on("/admin/*", () =>{}, {
    // Phương thức before được gọi trước khi render nội dung ra trình duyệt
    before: (done) => {
        if(localStorage.getItem('user')){
            // lấy id trong localStorage
            const userId = JSON.parse(localStorage.getItem('user')).id;
            // Nếu userid == 1 thì render
            if(userId === 1){
                done();
            } else {
                // ngược lại nếu ko phải admin quay về trang chủ
                document.location.href="/"
            }
        } else {
            document.location.href="/"
        }
        
    }
})
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
    "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
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