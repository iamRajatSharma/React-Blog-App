import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

        </>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/write",
                element: <Write />
            },
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    }
])


function App() {

    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router}></RouterProvider>
                {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element="hello">Home</Route>
                </Routes>
            </BrowserRouter> */}
            </div>
        </div>
    )
}




export default App
