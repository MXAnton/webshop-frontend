# Your Shoes frontend
The frontend is built using Vue, Typescript and Axios to connect to the backend API.

## 🎮 Try the live website
Try the live website: [your-shoes.netlify.app](https://your-shoes.netlify.app/).

## 📚 Tech stack
- `Vue 3` frontend framework.
- `Vue router` routes the user to different views depending on the url and if the user is logged in or not etc. It stores the web history and can navigate in it. It also scrolls the browser on route change depending on previous route and new route. Before each route change applies it loads the user if stored user == null and checks if user is allowed to access requested route, if not it reroutes the user.
- `Vuex` stores "global" vars that you can access from anywhere in the code. Stores them until you refresh or leave the website. Used to store user, themes etc in current "session".
- `Axios` creates the API connection to the backend.
- `GSAP` easy animations.

## 🔒 Enviroment vars
- VUE_APP_BACKEND_DOMAIN="http://localhost:4000/"

## 📝 Edit the code
If you want to make changes to the backend follow these steps:
1. **Clone the repo** to you local computer.
2. **You need node and npm** installed on you computer.
3. **Install dependencies** with:
```sh
npm install
```
5. **Create env file** to store local enviorment vars for development.
6. **Run the backend** with:
```sh
npm run dev
```
7. **Edit code**
8. **Commit the changes**
9. **Push commits**

## Other dev commands
- **Compiles and minifies for production**
```
npm run build
```
- **Lints and fixes files**
```
npm run lint
```
