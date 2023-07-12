import React from 'react'
import '../styles/Projects.css'

export const Projects = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto" id={'projects'}>
            <div className="flex flex-col align-center">
                <div className="education text-center">
                    <div className="education__header">Projects</div>
                    <div className="education__sub">&quot;The only true <span className={'special'}>wisdom</span> is
                        in <span className={'special'}>knowing</span> you
                        know <span className={'special'}>nothing</span>.&quot;
                    </div>
                </div>
            </div>
            <div className="flex flex-col align-center items-center mx-auto">
                <div
                    className="grid grid-cols-3 md:inline-flex rounded-xl border-highlight border-2 p-2 w-max bg-light mb-4">
                    <button
                        className="bg-white shadow-sm text-highlight inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:text-highlight focus:relative"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="computer"
                             className="h-4 w-4" fill={'currentColor'}>
                            <path
                                d="M4.5,10H10a3,3,0,0,0,1.07-5.8,4,4,0,0,0-7.48,1A2.5,2.5,0,0,0,4.5,10Zm0-3a1,1,0,0,0,1-1,2,2,0,0,1,3.89-.64,1,1,0,0,0,.78.66A1,1,0,0,1,11,7a1,1,0,0,1-1,1H4.5a.5.5,0,0,1,0-1ZM19,2H14a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H8v2H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2H16V18h3a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM14,20H10V18h4Zm6-5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14H20Z"></path>
                        </svg>
                        Frontend
                    </button>

                    <button
                        className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-highlight focus:relative"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                             id="data-storage"
                             className="h-4 w-4" fill={'currentColor'}
                        >
                            <path
                                d="M15,17a1,1,0,1,0,1,1A1,1,0,0,0,15,17ZM9,17H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9,0a1,1,0,1,0,1,1A1,1,0,0,0,18,17Zm-3-6a1,1,0,1,0,1,1A1,1,0,0,0,15,11ZM9,11H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9-6a1,1,0,1,0,1,1A1,1,0,0,0,18,5Zm0,6a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm4-6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V7a3,3,0,0,0,.78,2A3,3,0,0,0,2,11v2a3,3,0,0,0,.78,2A3,3,0,0,0,2,17v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V17a3,3,0,0,0-.78-2A3,3,0,0,0,22,13V11a3,3,0,0,0-.78-2A3,3,0,0,0,22,7ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5A1,1,0,0,1,4,7V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM15,5a1,1,0,1,0,1,1A1,1,0,0,0,15,5ZM9,5H6A1,1,0,0,0,6,7H9A1,1,0,0,0,9,5Z"></path>
                        </svg>
                        Backend
                    </button>

                    <button
                        className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-black focus:relative hover:text-highlight"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                        Application
                    </button>
                </div>
            </div>
            <div className={'projects__container px-2 lg:px-0'}>
                <div className={'featured__projects'}>
                    <div className={'featured__projects__header text-2xl lg:text-3xl'}>Featured Projects</div>
                    <div className={'featured__projects__sub text-lg lg:text-2xl text-gray'}>Here are a few projects
                        I&apos;ve
                        worked on
                        recently.
                    </div>
                    <div
                        className={'featured__projects__list grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5'}>
                        {list.map((item, index) => (
                            <div key={index}
                                 className="project__container rounded-[10px] bg-white p-2 sm:p-6 border-highlight border-2">
                                <div className="group relative block h-40 sm:h-80 lg:h-64">
                                    <span
                                        className="absolute inset-0 border-2 border-dashed border-highlight rounded-lg"></span>
                                    <div
                                        className="project__image rounded-lg relative flex h-full transform items-end bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                                    >
                                        <div
                                            className={"bg-white w-max px-3 py-1 rounded-full text-sm absolute top-2 right-2 cursor-pointer"}
                                        >Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                                        height={12} width={12} fill="#000000"
                                                        className={"inline-flex font-bold align-middle ml-1"}
                                                        id="diagonal-arrow">
                                            <path
                                                d="M26.92 5.62a1 1 0 0 0-.54-.54A1 1 0 0 0 26 5H6a1 1 0 0 0 0 2h17.59L5.29 25.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L25 8.41V26a1 1 0 0 0 2 0V6a1 1 0 0 0-.08-.38Z"></path>
                                        </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="block text-sm text-gray mt-2">
                                    Web Development
                                </div>

                                <a href="#projects">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        Airbnb Clone
                                    </h3>
                                </a>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                        React
                                    </span>
                                    <span
                                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                    >
                                    TypeScript
                                    </span>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}
