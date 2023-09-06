import React, { Suspense  , lazy} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"

const AppLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
const LazyLoading = lazy(()=> import("./components/LazyLoading"))
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />,
            },
            {
                path : "/about",
                element : <About />,
            },
            {
                path : "/contact",
                element : <Contact />,
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu />,
            },
            {
                path : "/lazy",
                element : <Suspense fallback={<h1>Loading...</h1>}><LazyLoading/></Suspense>
            }
        ],
        errorElement : <Error />,
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);