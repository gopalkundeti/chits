import React from "react";
import { createBrowserRouter } from 'react-router-dom'
import Home from "./pages/home";
import Register from "./pages/register";
import Contact from "./pages/contact";
import { Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import "./global.css"


const App = () => {
  let routerWay = createBrowserRouter([
    {
        path : '/',
        element : <app/>,
        children : [
            {
                path : '/home',
                element : <Home/>
            }
        ]
    }

])
  return (
    <>
    <main className="navbar">
            <section className="logo">Logo</section>
            <section className="menu"> 
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Register</li>
                <li>Login</li>
            </ul>
            </section>
        </main>

        <Register/>
    </>

  );
}

export default App