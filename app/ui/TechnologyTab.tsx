
import React from "react";
import { Technology } from "@/app/lib/Technology"



const technologyNames = [
  "nextjs",
  "typescript",
  "react",
  "golang",
  "web",
  "sqlite3",
  "java",
  "javascript",
  "golang-alt",
  "git",
  "reactjs",
  "javafx",
  "nodejs",
  "neovim",
  "docker"
];


export default function TechnologyTab() {
  return (
    <div className={`flex flex-wrap gap-x-2 gap-y-4 py-12  text-3xl w-4/5`}>
      {technologyNames.map((name, index) => (
        <Technology key={index} name={name} />
      ))}
    </div>
  );

}
