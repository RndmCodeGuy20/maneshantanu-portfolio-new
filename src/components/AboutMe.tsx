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
                        <div className="aboutme__image py-8 px-4 mx-auto text-white mb-10">
                            <h1 className="text-3xl font-bold">Some Gibberish</h1>
                        </div>
                        <p>A learning lad, capable of writing smart and efficient code. With knowledge of fullstack web
                            development, android development, machine learning and languages like C/C++, Python, Java,
                            Kotlin, currently learning Django. Wanting to have a career in Artificial Intelligence and
                            Machine Learning and also preparing for UPSC.</p>

                    </div>
                    <div className="flex flex-col">
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
