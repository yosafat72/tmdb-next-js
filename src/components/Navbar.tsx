'use client'

export default function Navbar() {
    return (
        <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between">
                    <a className="flex-none text-xl font-semibold focus:outline-hidden focus:opacity-80" href="#"
                       aria-label="Brand">
                        Brand
                    </a>
                    <div className="sm:hidden">
                        <button type="button"
                                className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example"
                                aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                            <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6"/>
                                <line x1="3" x2="21" y1="12" y2="12"/>
                                <line x1="3" x2="21" y1="18" y2="18"/>
                            </svg>
                            <svg className="hs-collapse-open:block hidden shrink-0 size-4"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>
                <div id="hs-navbar-example"
                     className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
                     aria-labelledby="hs-navbar-example-collapse">
                    <div
                        className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <a className="font-medium text-blue-500 focus:outline-hidden" href="#"
                           aria-current="page">Landing</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
                           href="#">Account</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
                           href="#">Work</a>
                        <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400"
                           href="#">Blog</a>
                        <div className="relative hs-dropdown">
                            <button id="hs-navbar-example-dropdown" type="button"
                                    className="hs-dropdown-toggle flex items-center w-full text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 font-medium"
                                    aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                                Dropdown
                                <svg
                                    className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6"/>
                                </svg>
                            </button>

                            <div
                                className="hs-dropdown-menu absolute top-full left-0 mt-2 transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 border border-gray-200 hidden"
                                role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                   href="#">
                                    About
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                   href="#">
                                    Downloads
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                   href="#">
                                    Team Account
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}