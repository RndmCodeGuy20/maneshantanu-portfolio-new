// import '../styles/Footer.css';
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 footer">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-black">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Blogs</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Published</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-black">Follow
                                me</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                       className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-black">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
              href="https://flowbite.com/" className="hover:underline">RndmCodeGuy20™</a>. All Rights Reserved.
          </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
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
                </div>
            </div>
        </footer>
    );
}

export default Footer;
