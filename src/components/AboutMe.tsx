import '../styles/AboutMe.css';
import React from 'react';

function AboutMe() {


    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto p-4 py-16">
            <div className="flex flex-col align-center">
                <div className="aboutme text-center">
                    <div className="aboutme__header">About Me</div>
                    <div className="aboutme__sub">"I'm nobody, as like a <span>zero</span>"</div>
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
                        <p className={'about__description text-gray text-left text-sm font-monospace'}>
                            <span className={'text-[#F58F29]'}>{'\u007B'}</span><br/>
                            &emsp;<span className={'text-[#A30015]'}>description </span><span>: </span>
                            <span className={'text-[#2CDA9D]'}>{'\u0022'}A learning lad, capable of writing smart and efficient code.{'\u0022'},</span>
                            <br/>
                            &emsp;<span className={'text-[#A30015]'}>skills </span><span>: </span>
                            <span className={'text-[#F58F29]'}>{'\u005B'}</span><br/>
                            &emsp;<span className={'text-[#2CDA9D]'}>{'\u0022'}C/C++{'\u0022'}</span>
                            <span className={'text-[#F58F29]'}>, </span><br/>
                            &emsp;<span className={'text-[#2CDA9D]'}>{'\u0022'}Python{'\u0022'}</span>
                            <span className={'text-[#F58F29]'}>, </span><br/>
                            &emsp;<span className={'text-[#2CDA9D]'}>{'\u0022'}Java{'\u0022'}</span>
                            <span className={'text-[#F58F29]'}>, </span><br/>
                            &emsp;<span
                            className={'text-[#2CDA9D]'}>{'\u0022'}FullStack Web Development{'\u0022'}</span>
                            <span className={'text-[#F58F29]'}>, </span><br/>
                            &emsp;<span className={'text-[#2CDA9D]'}>{'\u0022'}Android Development{'\u0022'}</span>
                            <span className={'text-[#F58F29]'}>, </span><br/>
                            &emsp;<span className={'text-[#2CDA9D]'}>{'\u0022'}ML & DL{'\u0022'}</span><br/>
                            <span className={'text-[#F58F29]'}>{'\u005D'}</span>
                            <br/>
                            &emsp;<span className={'text-[#A30015]'}>aspirations </span><span>: </span>
                            <span className={'text-[#F58F29]'}>{'\u005B'}</span><br/>
                            &emsp;&emsp;<span
                            className={'text-[#2CDA9D]'}>{'\u0022'}A Career in AI & ML{'\u0022'}</span>
                            <span className={'text-[#F58F29]'}>, </span><br/>
                            &emsp;&emsp;<span className={'text-[#2CDA9D]'}>{'\u0022'}Cracking UPSC{'\u0022'}</span><br/>
                            &emsp;<span className={'text-[#F58F29]'}>{'\u005D'}</span>
                            <br/>
                            <span className={'text-[#F58F29]'}>{'\u007D'}</span>
                        </p>

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
