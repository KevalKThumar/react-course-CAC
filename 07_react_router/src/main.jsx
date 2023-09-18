import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import AboutPage from "./page/AboutPage";
import Layout from "./page/Layout";
import ContactUs from "./page/ContactUs";
import User from "./component/User";
import Github, { gitHubInfoData } from "./component/Github";
import Keval from './page/Keval';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <HomePage />,
//       },
//       {
//         path: "about",
//         element: <AboutPage />,
//       },
//       {
//         path: "contactus",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} >
       
      </Route>
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/user/:userid" element={<User />} />
      <Route 
        path="/github" 
        element={<Github />} 
        loader={
          gitHubInfoData
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
