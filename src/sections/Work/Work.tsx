import WorkCard from "@/sections/Work/WorkCard";
import { WORKS } from "./works";

export default function Work() {
    return (
        <div className="flex flex-col items-center gap-6 w-full px-24">
            <h1 className="text-3xl font-bold">Work</h1>
            <div className="flex flex-col gap-9">
                {WORKS.map((work, i) => (
                    <div
                        key={i}
                        className="transform transition-transform duration-300 ease-in-out"
                    >
                        <WorkCard
                            work={work}
                            direction={i % 2 === 0 ? "left" : "right"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
