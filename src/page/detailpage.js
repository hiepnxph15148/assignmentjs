import axios from 'axios';
import { get } from '../api/post';
import MenuList from '../components/menuList';
import Footer from '../components/footer';

const DetailPost = {
    async render(id) {
        const { data } = await get(id);
        return `
            <div>
            <div class="max-w-5xl m-auto">
            ${MenuList.render()}
            <h1 class="text-center py-2 font-bold">${data.title}</h1>
            <img src="${data.img}" class="m-auto />
            <p text-center py-4>${data.desc}</p>
           <spam class="backdrop-grayscale-400"> ${Footer.render()} </spam>
        </div>    
            </div>
        `
    },
};
export default DetailPost;