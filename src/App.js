import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (

    <Provider store = {store} >
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
        {
    path: "/",
    element: <Body/>
  },
        {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu/>
  },
 
    ],
  }, 
  {
    path: "/login",
    element: <Login/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);