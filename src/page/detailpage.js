import Footer from "../components/footer";
import MenuList from "../components/menuList";
import data from "../data";

const DetailNewsPage = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return `
        <div class="max-w-5xl m-auto">
            ${MenuList.print()}
            <h1 class="text-center py-2 font-bold">${result.title}</h1>
            <img src="${result.img}" class="m-auto />
            <p text-center py-4>${result.desc}</p>
           <spam class="backdrop-grayscale-400"> ${Footer.print()} </spam>
        </div>    
        `;
    },
};
export default DetailNewsPage;