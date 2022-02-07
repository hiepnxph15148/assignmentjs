import axios, { Axios } from "axios";
import { add } from "../api/post";

const AddNews = {
    render() {
        return/*html*/`
        <div class="min-h-full py-6">
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Viết bài viết
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
        <!-- Replace with your content -->
        <main class="border-8 border-sky-500 mt-8 rounded-3xl p-8">
        <form action="" id="form-add">
            <input type="text" 
                class="border-2 border-slate-900 w-96 h-10 mb-8" 
                placeholder="title post"
                id="title-post"
                > <br />
            <input type="file" 
                class="border-2 border-slate-900 w-96 h-10 mb-8" 
                placeholder="image "
                id="img-post"
                > <br />
            <textarea name="" 
                    id="desc-post" 
                    class=" border-2 border-slate-900 w-96 h-10 mb-8"
                    placeholder="Bài viết"
                    ></textarea><br />
            <button class="bg-blue-500 p-4 text-white rounded-3xl">Thêm bài viết</button>
        </form>
        <!-- /End replace -->
    </div>
        </div>    
        </main>
        `
    },
afterRender() {
    const formAdd = document.querySelector("#form-add");
    const imgPost = document.querySelector("#img-post");

    imgPost.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/fptpolytechnic/image/upload";

      // Lấy giá trị của file upload cho sử dụng formData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "lmpuk8lt");
      
        // call API
      const { data } = await axios.post(CLOUDINARY_API,formData, {
          headers: {
            "Content-Type": "application/x-www-formendcoded",
          },
        }
      );
      // submit form
      formAdd.addEventListener("submit", (e) => {
        e.preventDefault();
        add({
          title: document.querySelector("#title-post").value,
          img: data.url,
          desc: document.querySelector("#desc-post").value,
        });
        // Sau khi thêm bài viết thành công...
      });

    });
  },
};
export default AddNews;