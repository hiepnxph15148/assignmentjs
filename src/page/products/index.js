import { getAll } from '../../api/products';
import Banner from '../../components/banner';
import MenuList from '../../components/menuList';
const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return `
            ${MenuList.render()}
            ${Banner.render()}
            <div class="grid grid-cols-5 gap-8 py-4">
                ${data.map((post) => `
                    <div class="border p-4">
                        <h3 class="my-3 text-center"><a href="/#/products/${post.id}" class="text-center font-semibold text-lg text-orange-500">${post.name}</a></h3>   
                        <img src="${post.img}" alt="">              
                        <p class="font-bold text-center">${post.price}</p>
                    </div>
                `).join("")}
                
            </div>
        `;
    },
};
export default ProductsPage;