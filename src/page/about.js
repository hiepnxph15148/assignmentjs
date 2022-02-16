import axios from 'axios';
import Footer from '../components/footer';
import MenuList from '../components/menuList';
import Banner from '../components/banner';
const AboutPage = {
        async render() {
        const { data } = await axios.get('http://localhost:3001/posts');
        return`
        <div> ${MenuList.render()}</div>
        <div> ${Banner.render()}</div>
        <h1 class="text-center font-bold py-3">Đồ uống đặc chưng </h1>
        <div class="grid grid-cols-4 gap-4 m-auto py-8">
            ${data.map((post) => /* html */ `
                <div class="news">
                    <div class="iteam border border-black p-2 ">
                        <a href="/#/news/${post.id}"><img src="${post.img}" class=" m-auto h-[180px]" alt=""></a>
                <h2  class="text-center">
                    <a class="font-bold" href="/#/news/${post.id}">${post.title}</a>
                </h2>
                </div>
            </div>
            `).join("")}
            </div>
            </div>
            <a href=""><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757361/banner2_j8syqq.jpg" class="py-4" alt=""></a>
            <div>
            <spam class=""> ${Footer.render()} </spam>
        `;
    },
};
export default AboutPage;