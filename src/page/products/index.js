import { getAll } from '../../api/products';
import Banner from '../../components/banner';
import MenuList from '../../components/menuList';
import Footer from '../../components/footer';
const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return `
            ${MenuList.render()}
            ${Banner.render()}
            <div class="grid grid-cols-4 gap-8 py-4">
                ${data.map((post) => `
                    <div class="border p-4">
                        <h3 class="my-3 text-center"><a href="/#/products/${post.id}" class="text-center font-semibold text-lg text-orange-500">${post.name}</a></h3>   
                        <a href=""><img src="${post.img}" alt=""></a>             
                        <p class="font-bold text-center text-red-600 pt-3">${post.price}</p>
                    </div>
                `).join("")}
                
            </div>
            <div>
            <a href=""><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644763699/banner1_jk3duz.jpg" class="py-4" alt=""></a>
            </div>
            <div>${Footer.render()}</div>
        `;
    },
};
export default ProductsPage;