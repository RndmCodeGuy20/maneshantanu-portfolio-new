import React, {useState} from 'react'
import '../styles/Projects.css'
import {projects} from "../data/projects";
import mlLogo from "../assets/ml.svg";

interface IProject{
    name: string,
    image: string,
    github: string,
    link: string,
    tech: string[]
}

export const Projects = () => {
    type Category = 'frontend' | 'backend' | 'ml';
    // const list = [1, 2, 3]
    const [category, setCategory] = useState<Category>('frontend');

    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto mb-10 sm:mb-5" id={'projects'}>
            <div className="flex flex-col align-center">
                <div className="education text-center">
                    <div className="education__header">Projects</div>
                    <div className="education__sub">&quot;The only true <span className={'special'}>wisdom</span> is
                        in <span className={'special'}>knowing</span> you
                        know <span className={'special'}>nothing</span>.&quot;
                    </div>
                </div>
            </div>
            <div className="flex flex-row align-center items-center md:flex-col lg:flex-col px-2 md:px-0 lg:px-0">
                <div
                    className="grid grid-cols-3 md:inline-flex rounded-xl border-primary border-2 p-2 w-max bg-light mb-4">
                    <button
                        className={`${category == 'frontend' ? `bg-white shadow-sm text-highlight` : ''} inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm hover:text-highlight focus:relative`}
                        onClick={() => setCategory('frontend')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="computer"
                             className="h-4 w-4" fill={'currentColor'}>
                            <path
                                d="M4.5,10H10a3,3,0,0,0,1.07-5.8,4,4,0,0,0-7.48,1A2.5,2.5,0,0,0,4.5,10Zm0-3a1,1,0,0,0,1-1,2,2,0,0,1,3.89-.64,1,1,0,0,0,.78.66A1,1,0,0,1,11,7a1,1,0,0,1-1,1H4.5a.5.5,0,0,1,0-1ZM19,2H14a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H8v2H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2H16V18h3a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM14,20H10V18h4Zm6-5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14H20Z"></path>
                        </svg>
                        Frontend
                    </button>

                    <button
                        className={`${category == 'backend' ? `bg-white shadow-sm text-highlight` : ''} inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-highlight focus:relative`}
                        onClick={() => setCategory('backend')}
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
                        className={`${category == 'ml' ? `bg-white shadow-sm text-highlight` : ''} inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-highlight focus:relative`}
                        onClick={() => setCategory('ml')}
                    >
                        <img src={mlLogo} alt="" height={20} width={20}/>
                        Machine Learning
                    </button>
                </div>
            </div>
            <div className={'projects__container px-2 lg:px-0'}>
                <div className={'featured__projects'}>
                    {/*<div className={'featured__projects__header text-2xl lg:text-3xl'}>Featured Projects</div>*/}
                    {/*<div className={'featured__projects__sub text-lg lg:text-2xl text-gray'}>Here are a few projects*/}
                    {/*    I&apos;ve*/}
                    {/*    worked on*/}
                    {/*    recently.*/}
                    {/*</div>*/}
                    <div
                        className={'featured__projects__list grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5'}>
                        {projects[category].map(( project: IProject, index: number ) => (
                            <div key={index}
                                 className="project__container rounded-[10px] bg-white p-2 sm:p-6 border-highlight border-2">
                                <div className="group relative block h-40 sm:h-80 lg:h-64">
                                    <span
                                        className="absolute inset-0 border-2 border-dashed border-highlight rounded-lg">

                                    </span>
                                    <a href={project.github}>
                                        <div
                                            className="project__image rounded-lg relative flex h-full transform items-end bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                                            style={{backgroundImage: `url(${project.image})`}}
                                        >
                                            <a href={project.link}>
                                                <div
                                                    className={"bg-white w-max px-3 py-1 rounded-full text-md absolute top-2 right-2"}
                                                >Visit!
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                                         height={12} width={12} fill="#000000"
                                                         className={"inline-flex font-bold align-middle ml-1"}
                                                         id="diagonal-arrow">
                                                        <path
                                                            d="M26.92 5.62a1 1 0 0 0-.54-.54A1 1 0 0 0 26 5H6a1 1 0 0 0 0 2h17.59L5.29 25.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L25 8.41V26a1 1 0 0 0 2 0V6a1 1 0 0 0-.08-.38Z"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </a>
                                </div>
                                <div className="block text-sm text-gray mt-2">
                                    Frontend Web Development
                                </div>

                                <a href="#projects">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        {project.name}
                                    </h3>
                                </a>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    {project.tech.map(( tech: string, index: number ) => (
                                        <span key={index}
                                              className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-600"
                                        >
                                        {tech}
                                    </span>
                                    ))}

                                    {/*<span*/}
                                    {/*    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"*/}
                                    {/*>*/}
                                    {/*TypeScript*/}
                                    {/*</span>*/}
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}
