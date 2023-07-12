import '../styles/AboutMe.css';
import React from 'react';
import Tooltip from "../components/tooltip";

function AboutMe() {

    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto p-4 py-16" id={"aboutme"}>
            <div className="flex flex-col align-center">
                <div className="aboutme text-center">
                    <div className="aboutme__header text-5xl md:text-4xl lg:text-4xl">About Me</div>
                    <div className="aboutme__sub">&quot;I&apos;m nobody, as like a <span
                        className={'special'}>zero</span>&quot;
                    </div>
                </div>
                <div
                    className="aboutme__desc flex gap-10 flex-col lg:flex-row md:flex-col sm:flex-row align-center justify-items-center mx-auto py-8">
                    <div className="aboutme__text text-center max-w-xs lg:max-w-md md:max-w-md bg-purple-50">
                        <div
                            className="aboutme__image mx-auto px-1 text-white max-w-sm lg:max-w-md md:max-w-md w-fit">
                            <h1 className="">
                                <span className={'text-[#e5c07b] drop-shadow'}>const </span>
                                <span className={'text-[#abb2bf] drop-shadow'}>shantanu = </span>
                                <span className={'text-[#c678dd] drop-shadow'}>new </span>
                                <span className={'text-[#61afef] drop-shadow'}>Developer();</span>
                            </h1>
                        </div>
                        <div className="aboutme__text__desc text-justify mt-5">

                            <span className={"special w-fit"}>
                                <Tooltip text={"Hey!"} position={"10"}>
                                    <div className="aboutme__text__desc__header">👋🪨</div>
                                </Tooltip>
                            </span>
                            &nbsp;
                            I&apos;m Shantanu, a passionate self-taught Full Stack web developer and a
                            computer science undergraduate from India. My passion for software lies with dreaming up
                            ideas and making them come true with elegant interfaces. I take great care in the
                            experience,
                            architecture, and code quality of the things I build.
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row max-w-md gap-5">
                            <div className="">
                                <div className="list__num ">01</div>
                                <div className="list__dash mx-auto"></div>
                                <div className="list__dash mx-auto"></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="list__details_header">Number of Projects Completed :</div>
                                <div className="grid grid-rows-3 grid-flow-col">
                                    <div className="list__details_subhead">Backend : <span
                                        className="text-primary text-2xl ml-3">5+</span></div>
                                    <div className="list__details_subhead">Frontend :</div>
                                    <div className="list__details_subhead">Fullstack :</div>
                                    <div className="list__details_subhead">Data Analytics :</div>
                                    <div className="list__details_subhead">Machine Learning :</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row max-w-md gap-5">
                            <div className="">
                                <div className="list__num ">01</div>
                                <div className="list__dash mx-auto"></div>
                                <div className="list__dash mx-auto"></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="list__details_header">Number of Projects Completed :</div>
                                <div className="grid grid-rows-3 grid-flow-col">
                                    <div className="list__details_subhead">Backend : <span
                                        className="text-primary text-2xl ml-3">5+</span></div>
                                    <div className="list__details_subhead">Frontend :</div>
                                    <div className="list__details_subhead">Fullstack :</div>
                                    <div className="list__details_subhead">Data Analytics :</div>
                                    <div className="list__details_subhead">Machine Learning :</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row max-w-md gap-5">
                            <div className="">
                                <div className="list__num ">01</div>

                            </div>
                            <div className="flex flex-col">
                                <div className="list__details_header">Number of Projects Completed :</div>
                                <div className="grid grid-rows-3 grid-flow-col">
                                    <div className="list__details_subhead">Backend : <span
                                        className="text-primary text-2xl ml-3">5+</span></div>
                                    <div className="list__details_subhead">Frontend :</div>
                                    <div className="list__details_subhead">Fullstack :</div>
                                    <div className="list__details_subhead">Data Analytics :</div>
                                    <div className="list__details_subhead">Machine Learning :</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
