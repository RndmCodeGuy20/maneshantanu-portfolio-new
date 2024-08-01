interface IProjects {
    frontend: {
        name: string,
        description: string,
        link: string,
        github: string,
        image: string,
        tech: string[],
    }[],
    backend: {
        name: string,
        description: string,
        link: string,
        github: string,
        image: string,
        tech: string[],
    }[],
    ml: {
        name: string,
        description: string,
        link: string,
        github: string,
        image: string,
        tech: string[],
    }[]
}

export const projects: IProjects = {
    'frontend': [
        {
            'name': 'Airbnb Clone',
            'description': 'A clone of Airbnb\'s homepage',
            'link': 'https://airbnb.vercel.app',
            'github': 'https://github.com/RndmCodeGuy20/airbnb-mern',
            'image': 'https://i.ibb.co/0jZ3Q0L/airbnb.png',
            'tech': ['React', 'Next.js', 'Tailwind CSS']
        },
        {
            'name': 'Airbnb Clone',
            'description': 'A clone of Airbnb\'s homepage',
            'link': 'https://airbnb.vercel.app',
            'github': 'https://github.com/RndmCodeGuy20/airbnb-mern',
            'image': 'https://i.ibb.co/0jZ3Q0L/airbnb.png',
            'tech': ['React', 'Next.js', 'Tailwind CSS']
        },
        {
            'name': 'Airbnb Clone',
            'description': 'A clone of Airbnb\'s homepage',
            'link': 'https://airbnb.vercel.app',
            'github': 'https://github.com/RndmCodeGuy20/airbnb-mern',
            'image': 'https://i.ibb.co/0jZ3Q0L/airbnb.png',
            'tech': ['React', 'Next.js', 'Tailwind CSS']
        }
    ],
    'backend': [],
    'ml': []
}
