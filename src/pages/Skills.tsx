import '../styles/Skills.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faPlay} from "@fortawesome/free-solid-svg-icons";

function Skills() {
    const list: number[] = [1, 2, 3]
    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto p-4 ">
            <div className="flex flex-col align-center">
                <div className="skills text-center mb-10">
                    <div className="skills__header">Skills</div>
                    <div className="skills__sub">"I feel the need<span>...</span> The <span>need for speed</span>"</div>
                </div>
                <div className="skills__desc">
                    <div
                        className="individual__skills grid grid-cols-1 px-10 sm:px-0 sm:grid-cols-3 md:grid-cols-3 gap-10">
                        {list.map((item, index) => (
                            <div className="skills__lang flex flex-row items-center px-8 gap-4 w-full">
                                <div className="skills__lang__image">
                                    {/*<img src="../assets/cymphony.png" alt=""/>*/}
                                </div>
                                <div className="skills__lang__player flex flex-col flex-grow">
                                    <div className="skills__lang__player__now font-extralight text-sm text-primary">
                                        Now Playing
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div
                                            className="skills__lang__player__name font-monospace font-semibold text-2xl">
                                            "C"ymphony
                                        </div>

                                        <FontAwesomeIcon icon={faHeart} className={"heart"} size={"lg"}/>
                                    </div>
                                    <div className="skills__lang__player__sub text-l font-semibold text-gray">
                                        C/C++
                                    </div>
                                    <div className="skills__lang__player__progress ">
                                        <div className="skills__lang__player__progress__val">
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                    <span
                                        className="text-base font-medium">0:00</span>
                                        <span className="text-sm font-medium">3:14</span>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                    <div className="skills__stack grid grid-cols-1 px-10 sm:px-0 sm:grid-cols-3 gap-10 mt-20">
                        {list.map((item, index) => (
                            <div className="skills__tech flex flex-col items-center">
                                <div className="skills__tech__image my-8 flex items-center justify-center">
                                    <div
                                        className="skills__stack__image__view flex flex-row items-center justify-center ease-in-out duration-500 hidden gap-2">
                                        <svg width="27" height="25" viewBox="0 0 57 55" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M28.4045 0.866302C12.7545 0.866302 0.0628052 12.9256 0.0628052 27.7797C0.0628052 42.6429 12.7545 54.7024 28.4045 54.7024C44.0544 54.7024 56.7461 42.6429 56.7461 27.7797C56.7461 12.9256 44.0544 0.866302 28.4045 0.866302ZM28.4045 6.16555C41.0008 6.16555 51.116 15.8474 51.116 27.7797C51.116 39.7211 41.0008 49.4031 28.4045 49.4031C15.8082 49.4031 5.69297 39.7211 5.69297 27.7797C5.69297 15.8474 15.8082 6.16555 28.4045 6.16555ZM28.4045 17.7258C22.5835 17.7258 17.8121 22.2355 17.8121 27.7797C17.8121 33.333 22.5835 37.8428 28.4045 37.8428C34.2255 37.8428 38.9968 33.333 38.9968 27.7797C38.9968 22.2355 34.2255 17.7258 28.4045 17.7258ZM28.4045 23.0159C31.1718 23.0159 33.4621 25.1573 33.4621 27.7797C33.4621 30.4112 31.1718 32.5528 28.4045 32.5528C25.6371 32.5528 23.3469 30.4112 23.3469 27.7797C23.3469 25.1573 25.6371 23.0159 28.4045 23.0159Z"
                                                  fill="#C8FB82"/>
                                        </svg>
                                        <div
                                            className="skills__tech__image__view ease-in-out duration-500 text-white text-2xl font-semibold">View
                                            Album
                                        </div>
                                    </div>
                                </div>
                                <div className="skills__tech__header text-2xl">
                                    Hybrid Frontend Theory
                                </div>
                                <div className="border w-10/12 my-2 border-gray hidden"></div>
                                <div className="skills__tech__desc w-full px-4 flex flex-col ">
                                    <div className="skills__tech__lang flex flex-row items-center justify-evenly">
                                        <FontAwesomeIcon icon={faPlay} className={"play__button"}/>
                                        <div className="skills__tech__lang__name text-xl">HTML</div>
                                        <div
                                            className="skills__tech__player flex flex-col w-3/5">
                                            <div className="skills__tech__player__progress mt-4">
                                                <div className="skills__tech__player__progress__val">
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                    <span
                                        className="text-sm font-medium">0:00</span>
                                                <span className="text-sm font-medium">3:14</span>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="skills__tech__lang flex flex-row items-center justify-evenly">
                                        <FontAwesomeIcon icon={faPlay} className={"play__button"}/>
                                        <div className="skills__tech__lang__name text-xl">HTML</div>
                                        <div
                                            className="skills__tech__player flex flex-col w-3/5">
                                            <div className="skills__tech__player__progress mt-4">
                                                <div className="skills__tech__player__progress__val">
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                    <span
                                        className="text-sm font-medium">0:00</span>
                                                <span className="text-sm font-medium">3:14</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
