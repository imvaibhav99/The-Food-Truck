import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {About}  from "./components/About"
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import {ContactUs} from "./components/ContactUs";
import {Error} from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {       //js functional component
    return (
        <div className="app">
            <Header />
            {/*<Body />*/}

            {/*For sticky header where the header is attached to every other page (About Us,COntact Us etc)we import Outlet ,we are reusing the header again and again with children elements of Outlet*/}
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([    //for providing path to different sections in webpage
    {
        path:"/",
        element: <AppLayout />,
        children: [      //now the header will appear in every page when we put all path in children array
            {
                path:"/",
                element:<Body/>
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path:"/ContactUs",
                element:<ContactUs />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>,  //jb eeror hoga tb <Error /> page show krega
    },
   
    
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);    //provides routing context ,connect different react pages to enable navigation bw different webpages through path provided
 