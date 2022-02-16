import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
import { $ } from "../utils";
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/rerender";

const CartPage = {
    render(){
        const cart = JSON.parse(localStorage.getItem('cart'));
        return `
        ${MenuList.render()}
        <div class="max-w-7xl m-auto">
        ${Banner.render()}
            <table class="w-full">
                <thead class="w-full">
                    <tr>
                        <th class="text-left">Tên sản phẩm</th>
                        <th  class="text-left">Price</th>
                        <th class="text-left"> Số lượng</th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody class="w-full">
                    ${cart.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td class="px-4">${item.price}</td>
                            <td>${item.quantity}</td>
                            <td>
                                <button  data-id="${item.id}" class="btn increase border border-black p-2">+</button>
                                <button  data-id="${item.id}" class="btn decrease border border-black p-2">-</button>
                            </td>
                            <td>
                                <button data-id="${item.id}" class="btn remove border bg-red-500 px-4 py-3 text-white">Remove</button>
                            </td>
                        </tr>
                    `).join("")}
                </tbody>
                <tfoot class="w-full" >
                    <tr><td colspan="2" class="text-right">Tổng là: <span id="total">null</span></td></tr>
                </tfoot>
            </table>
            </div>
            ${Footer.render()}
        `
    },
    afterRender(){
        const btns = $('.btn');
        btns.forEach(btn => {
            btn.addEventListener('click', function(){
                const id = btn.dataset.id;
                if(btn.classList.contains('increase')){
                    increaseItemInCart(id, function(){
                        reRender(CartPage,"#app")
                    });
                } else if (btn.classList.contains('decrease')){
                    decreaseItemInCart(id, function(){
                        reRender(CartPage,"#app")  
                    })
                } else {
                    removeItemInCart(id, function(){
                        reRender(CartPage, "#app");
                    });
                }
            })
        });
    }
}
export default CartPage;