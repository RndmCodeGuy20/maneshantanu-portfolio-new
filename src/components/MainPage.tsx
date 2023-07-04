import '../styles/MainPage.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import instagramIcon from '../assets/instagram.svg';
import React from "react";

// import rightArrowIcon from '../assets/r_arrow.svg';

function MainPage() {
    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto p-4 pt-16 h-full flex flex-col">
            <div
                className="flex flex-col-reverse gap-5 sm:flex-row items-center justify-around ">
                <div className="flex flex-col items-start justify-center">
                    <div className="greeting__wrapper">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <div className="greeting__top text-xl">🧑‍🎤🚀Hi there, I'm👋</div>
                        <div className="greeting__bottom"></div>
                    </div>

                    <h1 className="font-serif font-bolder text-center text-black dark:text-black name">
                        <span className="special">Shantanu</span> Mane</h1>
                    {/*<p className="text-2xl mx-auto">a.k.a</p>*/}
                    {/*<div className="rndmcodeguy__neu name mx-auto">RndmCodeGuy</div>*/}
                    <p className="text-3xl text-center text-gray dark:text-gray-400">Thinker | Programmer | Doer</p>
                    <p className="text-lg text-black dark:text-gray-400">A few lines about <br/><br/>myself
                        spanning
                        over at least 3 lines</p>
                    {/*socials */}
                    <div className="flex flex-row gap-5 mt-5">
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <div
                                className="social__container p-1 bg-transparent flex flex-row flex-center items-center justify-center">
                                <img src={githubIcon} alt="LinkedIn"/>
                                <span>@RndmCodeGuy20</span>
                            </div>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <div
                                className="social__container p-1 bg-transparent flex flex-row flex-center items-center justify-center">
                                <img src={githubIcon} alt="LinkedIn"/>
                                <span>@RndmCodeGuy20</span>
                            </div>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <div
                                className="social__container p-1 background:white flex flex-row flex-center items-center justify-center">
                                <img src={githubIcon} alt="LinkedIn"/>
                                <span>@RndmCodeGuy20</span>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-row gap-5 mt-5">
                        <div className="knowme__neu text-lg">
                            Know Me!
                        </div>
                        <div className="resume__neu text-lg">
                            Resume
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center neucard">
                    <div className="neucard__image">
                    </div>
                </div>
            </div>
            <div
                className={'mt-14 mx-auto justify-center items-center bg-white border-2 border-[#832EF9] rounded-full px-4 py-3 text-[#832EF9] hover:translate-y-2 cursor-pointer duration-300 ease-in-out'}>
                <a href="#aboutme">Know Me!</a>
            </div>
        </section>
    );

}

export default MainPage;
