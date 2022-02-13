const MenuList = {
    render() {
        return /*html*/`
    <div class="bg-white">
        <ul class="flex justify-between px-8">
        <li><a href="/"><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757348/logo-dark_ksvqsf.png" class="block px-4 py w-[200px]" alt=""></a></li>
        <li><a href="/" class="block px-4 py-3 hover:bg-[red] hover:text-white ">Trang chủ </a></li>
        <li><a href="/about" class="block px-4 py-3 hover:bg-[red] hover:text-white">Đang bán</a></li>
        <li><a href="/news" class="block px-4 py-3 hover:bg-[red] hover:text-white ">Đặc chưng</a></li>
        <li><a href="/signin" class="block px-4 py-3 hover:bg-[red] hover:text-white ">Đăng nhập</a></li>
        <li><a href="/signup" class="block px-4 py-3 hover:bg-[red] hover:text-white ">Đăng ký</a></li>
        ${localStorage.getItem('user') ? `
        <li class="block px-4 py-3 hover:bg-[red] hover:text-white" id="account-email"></li>
        <li class="block px-4 py-3 hover:bg-[red]" id="logout" class="cursor-pointer">Logout</li>
        
      </ul>`: "" }
    </div>
        `
    },
    afteRender(){
        const accountEmail = document.querySelector('#account-email');
        if(accountEmail){
          accountEmail.innerHTML = JSON.parse(localStorage.getItem('user')).email;  
        }
        const logout = document.querySelector('#logout');
        if(logout){
          logout.addEventListener('click', function(){
            localStorage.removeItem('user');
            reRender(MenuList, '#menulist');
        })
        }
        
      }
};
export default MenuList;