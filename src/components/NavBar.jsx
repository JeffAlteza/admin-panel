"use client";
import React from "react";
import { useState } from "react";
import { Dialog, Popover,} from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  HomeIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { usePathname } from 'next/navigation';
import Image from "next/image";

const links = [
  {
    href: "/",
    icon: <HomeIcon className="h-6 w-6" />,
    title: "Dashboard",
  },
  {
    href: "/header/view-header",
    icon: <SquaresPlusIcon className="h-6 w-6" />,
    title: "Header",
  },
  {
    href: "/project",
    icon: <ComputerDesktopIcon className="h-6 w-6" />,
    title: "Project",
  },
  {
    href: "/contact",
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    title: "Contacts",
  },
];

export default function NavBar() {
  const currentRoute = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const CustomLink = (href, icon, title, index) => (
    <Link
      key={index}
      href={href}
      className="-mx-3 flex flex-row rounded-lg px-3 py-1 font-semibold leading-7 items-center text-md text-gray-900 hover:text-primary active:text-primary_active hover:bg-slate-200"
    >
      <div className="h-9 w-9 bg-gray-100 mr-2 items-center justify-center flex rounded-md">
        {icon}
      </div>
      {title}
    </Link>
  );

  return (
    <header className="sticky top-0 bg-slate-100">
      <nav
        className="mx-auto flex max-w-screen items-center justify-between p-4 lg:px-8 border-b border-gray-200"
        aria-label="Global"
      >
        <div className="flex mr-10">
          <a href="/" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">Your Company</span> */}
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`text-md font-semibold leading-6 ${
              currentRoute === "/" ? "text-primary underline" : "text-gray-900"
            } hover:text-primary active:text-primary_active`}
          >
            Dashboard
          </Link>

          <Link
            href="/header/view-header"
            className={`text-md font-semibold leading-6 ${
              currentRoute === "/header/view-header" ? "text-primary underline" : "text-gray-900"
            } hover:text-primary active:text-primary_active`}
          >
            Header
          </Link>

          <Link
            href="/project"
            className={`text-md font-semibold leading-6 ${
              currentRoute === "/project" ? "text-primary underline" : "text-gray-900"
            } hover:text-primary active:text-primary_active`}
          >
            Project
          </Link>

          <Link
            href="/contact"
            className={`text-md font-semibold leading-6 ${
              currentRoute === "/contact" ? "text-primary underline" : "text-gray-900"
            } hover:text-primary active:text-primary_active`}
          >
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a href="#" className="-mx-3 block font-semibold text-md justify-end">
            <p>Jeffrey Alteza</p>
            <p className="text-primary_darker text-xs text-end">
              Administrator
            </p>
          </a>
            <Dropdown />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span> */}
              <Image
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="pt-6 pb-4 flex items-center">
                <div className="w-12 h-12 bg-slate-500 rounded-full mr-2"></div>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-md font-semibold leading-7 text-gray-900"
                >
                  <p>Jeffrey Alteza</p>
                  <p className="text-primary_darker text-md">Administrator</p>
                </a>
              </div>
              <div className="space-y-2 py-6">
                {links.map((link, index) =>
                  CustomLink(link.href, link.icon, link.title, index)
                )}
              </div>
              <div className="space-y-2 py-6">
                <div>
                {CustomLink(
                  "/account/profile",
                  <UserCircleIcon className="h-6 w-6" />,
                  "Account"
                )}
                </div>
                <div>
                {CustomLink(
                  "/logout",
                  <ArrowRightOnRectangleIcon className="h-6 w-6" />,
                  "Logout"
                )}
                </div>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
