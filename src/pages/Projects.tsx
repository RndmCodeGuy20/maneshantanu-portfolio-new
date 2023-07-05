import React from 'react'
import '../styles/Projects.css'

export const Projects = () => {
    return (
        <section className="max-w-screen-xl bg-white dark:bg-gray-900 mx-auto">
            <div className="flex flex-col align-center">
                <div className="education text-center">
                    <div className="education__header">Projects</div>
                    <div className="education__sub">"The only true <span className={'special'}>wisdom</span> is
                        in <span className={'special'}>knowing</span> you
                        know <span className={'special'}>nothing</span>."
                    </div>
                </div>
            </div>
            <div className={'projects__container'}>
                <div className={'featured__projects'}>

                </div>
            </div>
        </section>
    )
}
