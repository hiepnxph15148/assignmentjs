import axios from 'axios';
import { get, getAll } from '../api/post';
import MenuList from '../components/menuList';
import Footer from '../components/footer';
import Banner from '../components/banner';

const DetailPost = {
    async render(id) {
        const { data } = await get(id);
        return `
            <div>
            <div class="max-w-5xl m-auto">
        </div>    
        ${MenuList.render()}
            </div>
            ${Banner.render()}
            <div class="flex">
            <img src="${data.img}" alt="">
            <div class="pt-20 pr-40">${data.desc}</div>
            </div>
<spam class=""> ${Footer.render()} </spam>

        `
    },
};
export default DetailPost;