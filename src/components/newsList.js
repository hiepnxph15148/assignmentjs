
const NewsList = {
        async print(){const response = await fetch("http://localhost:3001/post");
        const data = await response.json();
        return`
        <h2 class="text-2xl font-semibold uppercase my-4">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8 m-auto">
            ${data.map((post) => /* html */ `
                <div class="news">
                    <div class="iteam">
                        <a href="/news/${post.id}"><img src="${post.img}" alt=""></a>
                <h2>
                    <a href="/news/${post.id}">${post.title}</a>
                </h2>
                <p>
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