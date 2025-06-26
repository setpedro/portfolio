import SimpleCard, { SimpleCardProps } from "@/components/SimpleCard";
import React from "react";

export default function Skills() {
  const skills = [
    "TypeScript",
    "React",
    "Next",
    "Rust",
  ];
  
  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-center px-2">Not restricted to a specific tech stack and capable of quickly learning and adapting to new tools.</p>
        <p>Proficient in:</p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <SimpleCard
              text={`• ${skill}`}
              icon={`/TechStack/${skill}Logo.svg`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
