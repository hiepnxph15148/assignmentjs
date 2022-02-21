import { get } from '../../api/products';
import { $ } from '../../utils';
import { addToCart } from '../../utils/cart';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import MenuList from '../../components/menuList';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import category from '../category';

const DetailProductsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            ${MenuList.render()}
            ${Banner.render()}
            <div class="flex font-sans py-4">
  <div class="flex-none w-48 relative">
    <img src="${data.img}" alt="" class="absolute inset-0 w-full h-full m-auto" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        Classic Utility Jacket
      </h1>
      <div class="text-lg font-semibold text-slate-500">
        ${data.price}
      </div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button id="btnAddToCart" class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Thêm vào giỏ hàng
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
${Footer.render()}
        `;
    },
     afterRender(id){
        $("#btnAddToCart").addEventListener('click', async () => {
            const { data } = await get(id);
            addToCart({...data, quantity: 1}, function(){
                toastr.success(`Thêm  ${data.name} vào giỏ hàng thành công!`)
            })
        });
    }
};
export default DetailProductsPage;