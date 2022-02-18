import axios from "axios";
import { add, get, update } from "../api/products";

const AdminEditPost = {
    async render(id) {
       const {data} = await get(id)
        console.log(data);
        return /* html */`
        <div class="min-h-full py-6">
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Cập nhật bài viết
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/news" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Quay lại
                    </button>
                    </a>
                </div>
                </div>
        
            </div>
            </header>
            <main class="hi border-8 border-sky-500 mt-8 rounded-3xl">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <!-- Replace with your content -->
                <form action="" id="form-edit">
                    <input type="text" 
                        class="border-2 border-slate-900 w-96 h-10 mb-8" 
                        placeholder="name"
                        id="name-post"
                        value="${data.name}"
                        > <br />
                        <div class="grid grid-cols-3 gap-8">
                        <div>
                    <input type="file" 
                        class="border-2 border-slate-900  mb-8" 
                        placeholder="image "
                        id="img-post"
                        <div>
                          <img src="${data.img}" id="imgPreview" />
                        </div>
                      </div>
                        <br />
                    <textarea name="" 
                            id="price-post" 
                            placeholder="price"
                            class="border-2 border-slate-900 w-96 h-10 mb-8"
                            value="${data.price}"
                            ></textarea><br/>
                    <button class="bg-blue-500 p-4 text-white rounded-3xl">Cập nhật bài viết</button>
                </form>
                <!-- /End replace -->
            </div>
            </main>
        </div>
        `;
    },
afterRender(id){
        const formEdit = document.querySelector("#form-edit");
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector('#imgPreview');

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/fptpolytechnic/image/upload";
        const CLOUDINARY_PRESET = "mpuk8lt"

        let imgLink = "";

        imgPost.addEventListener('change', (e) => {
            // console.log(URL.createObjectURL(e.target.files[0]))
            imgPreview.src = URL.createObjectURL(e.target.files[0])
        })

        // submit form
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            if(file){
                 // Lấy giá trị của file upload cho sử dụng formData
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                    // call API
                const { data } = await axios.post(CLOUDINARY_API,formData, {
                    headers: {
                        "Content-Type": "application/x-www-formendcoded",
                    },
                    }
                );
                imgLink = data.url;
            }
            
           
            update({
                id: id,
                name: document.querySelector("#name-post").value,
                img: imgLink ? imgLink : imgPreview.src,
                price: document.querySelector("#price-post").value,
            });
        // Sau khi thêm bài viết thành công...
        });
    }
};
export default AdminEditPost;