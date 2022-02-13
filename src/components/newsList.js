import axios from 'axios';
const NewsList = {
        async render() {
        const { data } = await axios.get('http://localhost:3001/posts');
        return`
        <h1 class="text-center font-bold py-3">Cafe nguyên chất </h1>
        <div class="grid grid-cols-6 gap-4 m-auto py-8">
            ${data.map((post) => /* html */ `
                <div class="news">
                    <div class="iteam border border-black p-2 ">
                        <a href="/#/news/${post.id}"><img src="${post.img}" class=" m-auto h-[180px]" alt=""></a>
                <h2  class="text-center">
                    <a class="font-bold" href="/#/news/${post.id}">${post.title}</a>
                </h2>
                <p class="text-center text-red-600 font-bold">
                    ${post.desc}
                </p>
                </div>
            </div>
            `).join("")}
          
          </div>
          <div class="flex">
          <a href=""><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644758674/image-post-3_h6bwd9.jpg" class="py-4 " alt=""></a>
          <a href=""><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644758675/image-post-4_ox4c2h.jpg" class="py-4" alt=""></a>
          </div>
          <div>
          <a href=""><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757361/banner2_j8syqq.jpg" class="py-4" alt=""></a>
          </div>
        `;
    },
};
export default NewsList;