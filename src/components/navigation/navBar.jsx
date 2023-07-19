"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  HomeIcon,
  SquaresPlusIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";

const links = [
  {
    href: "/dashboard",
    icon: <HomeIcon className="h-6 w-6" />,
    title: "Dashboard",
  },
  {
    href: "/feature",
    icon: <SquaresPlusIcon className="h-6 w-6" />,
    title: "Feature",
  },
  {
    href: "/feature",
    icon: <SquaresPlusIcon className="h-6 w-6" />,
    title: "Event",
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const CustomLink = (href, icon, title, index) => (
    <Link
      key={index}
      href={href}
      className="-mx-3 flex flex-row rounded-lg px-3 py-1 font-semibold leading-7 items-center text-sm text-gray-900 hover:text-indigo-600 active:text-indigo-800 hover:bg-gray-50"
    >
      <div className="h-9 w-9 bg-gray-100 mr-2 items-center justify-center flex rounded-md">
        {icon}
      </div>
      {title}
    </Link>
  );

  return (
    <header className="sticky top-0 bg-transparent">
      <nav
        className="mx-auto flex max-w-screen items-center justify-between p-4 lg:px-8 border-b border-gray-400"
        aria-label="Global"
      >
        <div className="flex mr-10">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
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
            href="/dashboard"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 active:text-indigo-800"
          >
            Dashboard
          </Link>

          <Link
            href="/feature"
            className="text-sm font-semibold leading-6 text-gray-900  hover:text-indigo-600 active:text-indigo-800"
          >
            Features
          </Link>

          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900  hover:text-indigo-600 active:text-indigo-800"
          >
            Company
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a
            href="#"
            className="-mx-3 block font-semibold text-sm justify-end"
          >
            <p>Jeffrey Alteza</p>
            <p className="text-indigo-700 text-xs text-end">Administrator</p>
          </a>
          <div className="w-10 h-10 bg-slate-400 rounded-full ml-5 flex justify-center items-center text-white">
            <UserIcon className="h-7 w-7"/>
          </div>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
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
                  <p className="text-indigo-700 text-sm">Administrator</p>
                </a>
              </div>
              <div className="space-y-2 py-6">
                {links.map((link, index) =>
                  CustomLink(link.href, link.icon, link.title, index)
                )}
              </div>
              <div className="py-6">
                {CustomLink(
                  "/logout",
                  <ArrowRightOnRectangleIcon className="h-6 w-6" />,
                  "Logout"
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
