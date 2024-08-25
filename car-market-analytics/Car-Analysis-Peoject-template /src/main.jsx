// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import Root from "./routes/root";
// import Dashboard from './routes/DashBoard';
// import HighlightedCars from "./routes/HighlightedCars";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />, // This keeps the sidebar always rendered
//     children: [
//       {
//         path: "dashboard",
//         element: <Dashboard />
//       },
//       {
//         path: "highlighted",
//         element: <HighlightedCars />
//       }
      
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Dashboard from './routes/DashBoard';
import HighlightedCars from "./routes/HighlightedCars";
import Home from "./routes/Home";
// const router = createBrowserRouter([
//   {
//     path: "/car-analytics",
//     element: <Root />, // This keeps the sidebar always rendered
//     children: [
//       {
//         path: "home",
//         element: <Home />
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />
//       },
//       {
//         path: "hightlighted",
//         element: <HighlightedCars />
//       },
      
      
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


const router = createBrowserRouter([
  {
    path: "/car-market-analytics",
    element: <Root />, // This keeps the sidebar always rendered
    children: [
      {
        index: true, // Set this route as the default child
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "hightlighted",
        element: <HighlightedCars />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
