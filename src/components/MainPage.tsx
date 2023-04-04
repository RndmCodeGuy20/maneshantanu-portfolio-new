import '../styles/MainPage.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import instagramIcon from '../assets/instagram.svg';

// import rightArrowIcon from '../assets/r_arrow.svg';

function MainPage() {
    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto p-4 py-16">
            <div
                className="flex flex-col-reverse gap-5 sm:flex-row items-center justify-around ">
                <div className="flex flex-col items-start justify-center">
                    <div className="greeting__wrapper">
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
                            <img src={githubIcon} alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <img src={instagramIcon} alt="LinkedIn"/>
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
        </section>

    );

}

export default MainPage;
