const MenuList = {
    render() {
        return /*html*/`
        <div class="bg-[#191f37] py-4">
        <a href="">
          <img src="https://picsum.photos/250/100" class="mx-auto" alt="">
        </a>
      </div>
    <div class="bg-[#ca7802]">
        <ul class="flex">
        <li><a href="/" class="block px-4 py-3 hover:bg-[red] hover:text-white ">Trang chủ </a></li>
        <li><a href="/about" class="block px-4 py-3 hover:bg-[red] hover:text-white">Chương trình đào tạo</a></li>
        <li><a href="/admin/dashboard"  class="block px-4 py-3 hover:bg-[red] hover:text-white ">Dashboard</a></li>
        <li><a href="/news" class="block px-4 py-3 hover:bg-[red] hover:text-white ">Tin tức</a></li>
        <li><a href="/signin" class="block px-4 py-3 hover:bg-[red] hover:text-white ">Đăng nhập</a></li>
        <li><a href="/signup" class="block px-4 py-3 hover:bg-[red] hover:text-white ">Đăng ký</a></li>
        
            <form action="" class="ml-[70px] mt-[10px]">
            <input type="text">
            <button class="border bg-blue-800 ... px-[10px] text-white ... border-none hover:bg-sky-500 ">Tìm kiếm</button>
            </form>
        </ul>
    </div>
        `
    }
}
export default MenuList;