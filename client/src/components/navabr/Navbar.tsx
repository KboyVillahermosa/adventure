
"use client";


import { Navbar } from "flowbite-react";
import './Navabr.css'

export function Component() {
  return (
    <>
   <Navbar className="fixed w-full z-auto bg-tranparent ">
      <Navbar.Brand href="">
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-indigo-600">3Design</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="responsive">
        <Navbar.Link href="#" className="text-indigo-600">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-indigo-600">About</Navbar.Link>
        <Navbar.Link href="#" className="text-indigo-600">Services</Navbar.Link>
        <Navbar.Link href="#" className="text-indigo-600">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="text-indigo-600">Contact</Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>

    </>
  );
}
