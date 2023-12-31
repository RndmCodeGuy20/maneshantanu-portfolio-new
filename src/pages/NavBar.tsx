import '../styles/NavBar.css';
import React, {useState} from "react";

function NavBar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:max-w-screen-l">
                <a href="#" className="flex items-center name__header">
                    <img src="https://avatars.githubusercontent.com/u/78042851?v=4" className="h-8 mr-3 rounded-lg"
                         alt="main"/>
                    <span
                        className="self-center text-3xl font-semibold dark:text-black hidden sm:block">Shantanu Mane</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button"
                            className="text-primary bg-white border-2 rounded-full hover:bg-white font-medium text-xl px-4 py-2 text-center mr-3 md:mr-0 dark:bg-white dark:hover:bg-white primary-button transition duration-150 ease-out hover:ease-in">Connect
                    </button>
                    <button data-collapse-toggle="navbar-cta" type="button"
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center px-2 py-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 ml-4"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <svg className="w-6 h-6" aria-hidden="true" fill="bg-highlight" viewBox="0 0 20 20"
                             color={"bg-highlight"}
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd">

                            </path>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="flex flex-col text-xl font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/"
                               className="block py-2 pl-3 pr-4 text-navLink rounded md:bg-transparent md:p-0 md:dark:text-navLink dark:hover:text-primary navlink__text"
                               aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#aboutme"
                               className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-navLink dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent navlink__text">About</a>
                        </li>
                        <li>
                            <a href="#skills"
                               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-navLink dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent dark:border-gray-700 navlink__text">Skills</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-navLink dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent navlink__text">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 right-0 z-50 ${!open ? 'hidden' : ''} transition-colors ease-in-out w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className={"relative bg-white rounded-lg shadow-xl drop-shadow-2xl"}>
                    <button type="button" onClick={() => setOpen(false)}
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                            data-modal-hide="crypto-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
                <div className="px-6 py-4 border border-b-0 rounded-t-lg bg-white">
                    <h3 className="text-xl font-semibold text-black">
                        Wander around traveller! 🧳🌏
                    </h3>
                </div>
                <div className="p-4 bg-white rounded-b-lg border z-10">
                    <ul className="my-1 space-y-3 text-2xl bg-white">
                        <li>
                            <a href="#aboutme"
                               className="rounded-lg bg-light p-3 inline-flex w-full justify-around">👨‍🎤
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills"
                               className="rounded-lg bg-light p-3 inline-flex w-full justify-around">⚙️ Skills
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
