import '../styles/AboutMe.css';
import React from 'react';

function AboutMe() {


    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto p-4 py-16" id={"aboutme"}>
            <div className="flex flex-col align-center">
                <div className="aboutme text-center">
                    <div className="aboutme__header">About Me</div>
                    <div className="aboutme__sub">&quot;I&apos;m nobody, as like a <span
                        className={'special'}>zero</span>&quot;
                    </div>
                </div>
                <div
                    className="aboutme__desc flex gap-10 flex-col lg:flex-row md:flex-col sm:flex-row align-center justify-items-center mx-auto py-8">
                    <div className="aboutme__text text-center max-w-md">
                        <div className="aboutme__image py-8 px-1 mx-auto text-white">
                            <h1 className="">
                                <span className={'text-[#e5c07b] drop-shadow'}>const </span>
                                <span className={'text-[#abb2bf] drop-shadow'}>shantanu = </span>
                                <span className={'text-[#c678dd] drop-shadow'}>new </span>
                                <span className={'text-[#61afef] drop-shadow'}>Developer();</span>
                            </h1>
                        </div>
                        <div className="aboutme__text__desc">
                            <p className="text-gray-500 dark:text-gray-400">I&apos;m a <span
                                className={'special'}>Full Stack Developer</span> and a <span
                                className={'special'}>Competitive Programmer</span> from <span
                                className={'special'}>India</span>. I&apos;m currently pursuing my B.Tech in <span
                                className={'special'}>Computer Science and Engineering</span> from <span
                                className={'special'}>Indian Institute of Information Technology, Ranchi</span>. I
                                love to <span className={'special'}>code</span> and <span
                                    className={'special'}>solve problems</span>. I&apos;m a <span
                                    className={'special'}>quick learner</span> and a <span
                                    className={'special'}>team player</span>. I&apos;m always ready to <span
                                    className={'special'}>learn</span> and <span className={'special'}>explore</span>.
                            </p>
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
