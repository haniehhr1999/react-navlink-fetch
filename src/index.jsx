import React from "react";
import ReactDOM from "react-dom/client"
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
// import UserDetail from "./components/UserDetail";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/users" element={<Users />}>
                    {/* <Route path=":userId" element={<UserDetail />}></Route> */}
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
)