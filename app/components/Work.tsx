import ProjectCard from "./ProjectCard";

export default function Work() {
    return (
        <section className="px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProjectCard
                href="/projects/1"
                title="Escrito por una dama"
                description="(Written by a lady)"
                image="/images/project-1/cover.png"
            />
            <ProjectCard
                href="/projects/2"
                title="Wakamanta:"
                description="Oráculo express (Express oracle)"
                image="/images/project-2/cover.png"
            />
            <ProjectCard
                href="/projects/3"
                title="Las cicatrices:"
                description="Leporello ilustrado (Illustrated leporello)"
                image="/images/project-3/cover.png"
            />
            <ProjectCard
                href="/projects/4"
                title="Libro en braille"
                description=""
                image="/images/project-6/cover.png"
            />
            <ProjectCard
                href="/projects/5"
                title="Ilustración acuarela"
                description=""
                image="/images/project-5/cover.png"
            />
            <ProjectCard
                href="/projects/6"
                title="Ilustracíon rapidógrafo"
                description=""
                image="/images/project-6/cover.png"
            />
        </section>
    )
}