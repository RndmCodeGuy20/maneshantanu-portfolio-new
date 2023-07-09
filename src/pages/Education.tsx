import * as React from 'react';
import '../styles/Education.css';

type Props = { type: string };
export const Education = (props: Props) => {
    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto pt-16">
            <div className="flex flex-col align-center">
                <div className="education text-center">
                    <div className="education__header mt-1">Education</div>
                    <div className="education__sub">&quot;The only true <span>wisdom</span> is
                        in <span>knowing</span> you
                        know <span>nothing</span>.&quot;
                    </div>
                </div>
            </div>
            <div className="timeline__container">
                <div className="timeline">
                    <ul className="timeline__list">
                        <li className="timeline__obj__container">
                            <div className="timeline__content">
                                <div className="date text-3xl">2008 - 2018</div>
                                <h1>Delhi Public School, Kamptee Road, Nagpur</h1>
                                <p className="text-gray">C.B.S.E</p>
                                <p className="text-gray">Meritorious with 90% marks.</p>
                                <div className={"hidden md:block lg:block"}>
                                    <ul className="obj__list">
                                        <li className="obj__list__item">
                                            <p className="text-gray">Participated in various sports and cultural
                                                events.</p>
                                        </li>
                                        <li className="obj__list__item">
                                            <p className="text-gray">Participated in various sports and cultural
                                                events.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="timeline__obj__container">
                            <div className="timeline__content">
                                <h3 className="date text-2xl">2018 - 2020</h3>
                                <h1>St. Paul Senior Secondary School, Nagpur</h1>
                                <p className="text-light">C.B.S.E</p>
                                <p className="text-light">Meritorious with 89.4% marks.</p>
                            </div>
                        </li>
                        <li className="timeline__obj__container">
                            <div className="timeline__content">
                                <h3 className="date text-2xl">2020 - 2024</h3>
                                <h1>Shri Ramdeobaba College of Engineering and Management, Nagpur</h1>
                                <p className="text-gray">C.B.S.E</p>
                                <p className="text-gray">Meritorious with 90% marks.</p>
                                <div className={"hidden md:block lg:block"}>
                                    <ul className="obj__list">
                                        <li className="obj__list__item">
                                            <p className="text-gray">Facilitated and taught over 750+ students.</p>
                                        </li>
                                        <li className="obj__list__item">
                                            <p className="text-gray">Executive Member @ ISDC, RCOEM Chapter.</p>
                                        </li>
                                        <li className="obj__list__item">
                                            <p className="text-gray">Backend Developer @ GDSC, RCOEM Chapter.</p>
                                        </li>
                                        <li className="obj__list__item">
                                            <p className="text-gray">Member @ Robotics Club, RCOEM.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
};
