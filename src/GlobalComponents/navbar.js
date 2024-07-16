import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../App.css";
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" absolute">
      <nav
        className=" bg-#dfe667 px-12 py-4 lg:px-36 flex w-screen items-center justify-between  xl:py-16  "
        style={{ backgroundColor: "#11242f" }}
        aria-label="Global"
      >
        <div className="App-logo flex lg:flex-1 ">
          <a
            href="/"
            className="text-2xl flex lg:text-4xl xl:text-6xl  "
            style={{
              color: "#dfe667",

              textDecoration: "none",
            }}
          >
            Omar Elish
          </a>
        </div>
        <div className="flex 2xl:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            style={{
              color: "#dfe667",
            }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden 2xl:flex lg:gap-x-12 ">
          <a
            href="/skills"
            className="text-2xl xl:text-4xl font-semibold leading-6 no-underline"
            style={{
              color: "#dfe667",
            }}
          >
            Skills
          </a>
          <a
            href="/latestprojects"
            className="text-2xl xl:text-4xl font-semibold leading-6 no-underline"
            style={{
              color: "#dfe667",
            }}
          >
            Latest Projects
          </a>
          <a
            href="/contactme"
            className="text-2xl xl:text-4xl font-semibold leading-6 no-underline"
            style={{
              color: "#dfe667",
            }}
          >
            Contact Me!
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className=" xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="App-logo flex lg:flex-1 mx">
              <a
                href="/"
                className="no-underline"
                style={{
                  color: "#dfe667",
                  fontSize: "4vh",
                }}
              >
                Omar Elish
              </a>
            </div>

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
              <div className="space-y-2 py-6">
                <a
                  href="/skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                >
                  Skills
                </a>
                <a
                  href="/latestprojects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                >
                  Latest Projects
                </a>
                <a
                  href="/contactme"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                >
                  Contact Me!
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
