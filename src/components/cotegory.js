import { getAll } from "../api/category";
// import { reRender } from "../utils/rerender";
const category= {
  async render() {
    const { data } = await getAll()
        return /* html */`
                      ${data.map((post) =>/* html */`
                            <div class="inline p-4">
                            <div class="inline">
                              <img class="w-[200px] h-[200px]" src="${post.img}" alt="">
                               <div class="text-center"> ${post.name}</div>
                              </div>
                              </div>
                      `).join("")}
                      `
      
  }
};
export default category;