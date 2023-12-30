import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import TopCarousal from "./Components/TopCarousal";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import MidCarousal from "./Components/MidCarousal";
import ItemsMenu from "./Components/ItemsMenu";
import userContext from "./Utils/userContext";
import themeContext from "./themeContext";
import { Provider } from "react-redux";
import appStore from "./Redux Store/appStore";
// import Cart from "./Components/cart";
import Hi from "./Components/hi";

const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));


const AppLayout = () => (
  <Provider store={appStore}>
<themeContext.Provider value={{theme: "Light"}}>
  <userContext.Provider value={{loggedInUser: "Akshay Saini"}}>
  <div className="app">
    <Header />
    <Outlet/>
  </div>
  </userContext.Provider>
  </themeContext.Provider>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <TopCarousal />
            <MidCarousal/>
            <Hero />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          //Suspence is used to make react wait till our component is loading or mounting it takes fallback prop to display something eg: shimmer ui
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact/>
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />, 
      },
      {
        path: "ItemsMenu/:id",
        element: <ItemsMenu />,
      },
      {
        path: "/cart",
        element: <Hi />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
