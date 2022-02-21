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
                        <th>Image</th>
                        <th  class="text-center">Price</th>
                        <th class="text-center"> Số lượng</th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody class="w-full">
                    ${cart.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td class="w-[100px] h-[100px] px-4 text-center"><img src="${item.img}" alt=""></td>
                            <td class="px-4 text-center">${item.price}</td>
                            <td class="text-center">${item.quantity}</td>
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
                    <tr><td colspan="7" class="text-center font-bold">Tổng là: <span id="total"></span></td></tr>
                </tfoot>
            </table>
            </div>
            ${Footer.render()}
        `
    },
    afterRender(){
        const cart = JSON.parse(localStorage.getItem('cart'));
        let count=0;
        cart.map((item) =>{
            count+=item.price*item.quantity
        })
        const total=document.querySelector('#total')
        total.innerHTML=count
        
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