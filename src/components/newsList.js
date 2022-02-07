import axios from 'axios';
const NewsList = {
        async render() {
        const { data } = await axios.get('http://localhost:3001/posts');
        return`
        <div class="grid grid-cols-3 gap-8 m-auto py-4">
            ${data.map((post) => /* html */ `
                <div class="news">
                    <div class="iteam border border-black p-2">
                        <a href="/#/news/${post.id}"><img src="${post.img}" class="mx-auto" alt=""></a>
                <h2  class="text-center">
                    <a href="/#/news/${post.id}">${post.title}</a>
                </h2>
                <p class="text-center">
                    ${post.desc}
                </p>
                </div>
            </div>
            `).join("")}
          
          </div>
        `;
    },
};
export default NewsList;