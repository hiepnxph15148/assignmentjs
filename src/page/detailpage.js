import axios from 'axios';
import { get, getAll } from '../api/post';
import MenuList from '../components/menuList';
import Footer from '../components/footer';

const DetailPost = {
    async render(id) {
        const { data } = await get(id);
        return `
            <div>
            <div class="max-w-5xl m-auto">
            ${MenuList.render()}
            <h1 class="text-left py-5 text-3xl font-bold">${data.title}</h1>
            <div class="flex justify-between">
            <img src="${data.img}" class="w-[500px] border-2"/>
            <p class="p-3">Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!</p> 
            </div>
            <p class="font-bold">Giá: ${data.desc}</p>
            <input class=" hover:text-red-500 font-bold py-5" type="submit" value="Đặt mua">

           <spam class=""> ${Footer.render()} </spam>
        </div>    
            </div>
            
        `
    },
};
export default DetailPost;