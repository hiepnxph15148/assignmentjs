import axios, { Axios } from "axios";
import { add } from "../api/products";
// import { reRender } from "../utils/rerender";
// import AdminNews from "./adminew";
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
        <main  class="border-8 border-sky-500 mt-8 rounded-3xl p-8 hi">
        <form action="" id="form-add">
            <input type="text" 
                class="border-2 border-slate-900 w-96 h-10 mb-8 rounded-lg" 
                placeholder="Tên sản phẩm"
                id="name-post"
                > <br />
            <input name="" 
                    id="price-post" 
                    class=" border-2 border-slate-900 w-96 h-10 mb-8 rounded-lg"
                    placeholder="Giá sản phẩm"
                    ><br />
                    <div class="grid grid-cols-2 gap-2">
                    <div>
             <input type="file" 
               class="border-2 border-slate-900 mb-8 rounded-lg" 
                 id="img-post"
                 </div>
                 <div>
                <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" class="w-[200px] h-[200px]" id="imgPreview" />
                   </div>
                 <br>
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
    const imgPreview = document.querySelector('#imgPreview');

    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/fptpolytechnic/image/upload";
    const CLOUDINARY_PRESET = "mpuk8lt"

    imgPost.addEventListener('change', (e) => {
        // console.log(URL.createObjectURL(e.target.files[0]))
        imgPreview.src = URL.createObjectURL(e.target.files[0])
    })

    // submit form
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const file = imgPost.files[0];
      
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
      add({
        name: document.querySelector("#name-post").value,
        img: data.url,
        price: document.querySelector("#price-post").value,
      });
      // Sau khi thêm bài viết thành công...
    });
  },
};
export default AddNews;