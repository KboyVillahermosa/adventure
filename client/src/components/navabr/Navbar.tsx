"use client";

import { Navbar, DarkThemeToggle } from "flowbite-react";
import './Navabr.css'

export function Component() {
  return (
    <>
      <main className="dark:bg-gray-900">
        <Navbar className=" dark:bg-gray-900 bg-transparent">
          <Navbar.Brand href="">
            <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-indigo-600">Adventure Time</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Navbar.Toggle />
            <DarkThemeToggle />
          </div>
          <Navbar.Collapse className="responsive">
            <Navbar.Link href="#" className="text-indigo-600">
              Home
            </Navbar.Link>
            <Navbar.Link href="#" className="text-indigo-600">About</Navbar.Link>
            <Navbar.Link href="/message" className="text-indigo-600">Message</Navbar.Link>
            <Navbar.Link href="/spline" className="text-indigo-600">Spline</Navbar.Link>
            <Navbar.Link href="#" className="text-indigo-600">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </main>
    </>
  );
}



