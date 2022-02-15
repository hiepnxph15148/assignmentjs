import axios from 'axios';

const NewsList2 = {
        async render() {
        const { data } = await axios.get('http://localhost:3001/products');
        return`
        <h1 class="text-center font-bold py-3">Đồ uống đặc chưng </h1>
        <div class="grid grid-cols-5 gap-4 m-auto py-8">
            ${data.map((post) => /* html */ `
                <div class="news">
                    <div class="iteam border border-black p-2 ">
                        <a href="/#/products/${post.id}"><img src="${post.img}" class=" m-auto h-[180px]" alt=""></a>
                <h2  class="text-center">
                    <a class="font-bold" href="/#/products/${post.id}">${post.name}</a>
                </h2>
                <p class="text-center text-red-600 font-bold">
                    ${post.price}
                </p>
                </div>
            </div>
            `).join("")}
            </div>
            <div>
            <a href=""><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644763699/banner1_jk3duz.jpg" class="py-4" alt=""></a>
            </div>
        `;
    },
};
export default NewsList2;