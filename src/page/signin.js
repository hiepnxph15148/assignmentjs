import {signin} from "../api/user"
const SignIn = {
    render() {
        return/* html */ `
        <div class="w-24 h-10 border-2 text-center py-1 my-10 ml-20 hover:bg-[red] hover:text-white rounded-bl-full"><a href="/">Trở Về</a></div>
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form id="formSignin">
          <input type="email" id="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          <input type="password" id="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-8" placeholder="Password" />
          <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
      </form>
        </div>
      </div>
        `;
},
afterRender(){
    const formSignin = document.querySelector('#formSignin');
    formSignin.addEventListener('submit', function(e){
        e.preventDefault();
        signin({
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        })
    })
},
};
export default SignIn;