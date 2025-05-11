import ProjectCard from "./ProjectCard";

export default function Work() {
    return (
        <section className="px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProjectCard
                href="/projects/1"
                title="Escrito por una dama:"
                description="Written by a lady"
                image="/images/home/project-1.png"
            />
            <ProjectCard
                href="/projects/2"
                title="Wakamanta:"
                description="Express oracle"
                image="/images/home/project-2.jpg"
            />
            <ProjectCard
                href="/projects/3"
                title="Las cicatrices:"
                description="Illustrated leporello"
                image="/images/home/project-3.jpg"
            />
            <ProjectCard
                href="/projects/4"
                title="Río Atrato:"
                description="braille booklet"
                image="/images/home/project-4.png"
            />
            <ProjectCard
                href="/projects/5"
                title="Between feathers and skin:"
                description="Watercolor illustration"
                image="/images/home/project-5.png"
            />
            <ProjectCard
                href="/projects/6"
                title="Angélica:"
                description="Personal illustration"
                image="/images/home/project-6.png"
            />
        </section>
    )
}