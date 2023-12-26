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


const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));


const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet/>
  </div>
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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
