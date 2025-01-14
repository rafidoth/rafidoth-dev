import * as React from "react"
import { gloria, jetbrains } from "@/app/lib/font"
import { VscGithubAlt } from "react-icons/vsc";
import { Card, CardContent } from "@/components/ui/card"
import { FiExternalLink } from "react-icons/fi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Technology } from "../lib/Technology";
import Link from "next/link";


const projects = [
  {
    name: "seat-koi",
    description: "A web app that offer genrating trimester exam routine as PDF and web view",
    Problem: "UIU is one of the private universities of Bangladesh and it maintains open credit system. So, when they publish exam room allocation, they publish it in a Excel file. So, I made a web app that takes the Excel file and shows the room allocation very quickly and also user can export it as PDF",
    Learnings: "Learnt working with PDFs, Excel files, and also used shadcn for the first time.",
    TechnologiesUsed: ["nextjs", "typescript"],
    targetEnvironment: ["web"],
    GithubLink: "https://github.com/rafidoth/seat-koi",
    ProductionLink: "https://seat-koi.vercel.app/"
  },
  {
    name: "smotify",
    description: "A desktop app for listening to musici inclueding features like lyrics, chat, and more",
    Problem: "I wanted to build something like spotify but with more features like lyrics, chat, and more. So, I made this app. It uses socket communication, as database I used sqlite3.",
    Learnings: "Learnt working with sqlite3, socket communication, and also used JavaFXfor the first time.",
    TechnologiesUsed: ["java", "javafx", "sqlite3"],
    targetEnvironment: ["desktop"],
    GithubLink: "https://github.com/rafidoth/jfx-music-player",
    ProductionLink: ""
  }
]

export function Projects() {
  return (
    <Carousel className="w-11/12">
      <CarouselContent className={`w-full`}>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <span className={`${jetbrains.className} text-sm my-2`}>{index + 1}/{projects.length}</span>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col w-full p-3">
                  <div className={`flex items-center gap-x-2 justify-between`}>
                    <div className={`flex items-center gap-x-2`}>
                      <div className={`flex flex-col`}>
                        <div className={`flex items-center gap-x-2`}>
                          <span className={`text-lg font-semibold ${gloria.className}`}>{project.name}</span>
                          <Link href={project.GithubLink} target="_blank"><span><VscGithubAlt /></span></Link>
                        </div>
                        <span className={`text-xs text-gray-500 ${jetbrains.className}`}>{project.description}</span>
                      </div>

                    </div>
                    {project.ProductionLink.length !== 0 &&
                      <div className={`flex items-center`}>
                        <span className={`bg-zinc-800 rounded-md`}>
                          <Link href={project.ProductionLink} target="_blank">
                            <span className={"flex items-center gap-x-2 px-2 py-1 text-sm"}>
                              <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></span>
                              visit
                              <FiExternalLink />
                            </span>
                          </Link>
                        </span>
                      </div>
                    }
                  </div>
                  <div className={`flex items-center gap-x-2 my-1 text-3xl`}>
                    {project.TechnologiesUsed.map((tech, index) => (
                      <Technology key={index} name={tech} />
                    ))}
                  </div>
                  <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                      <AccordionTrigger><p>What challenge does <span><strong>{project.name}</strong></span> address?</p></AccordionTrigger>
                      <AccordionContent>
                        <span className={`text-md `}>{project.Problem}</span>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger><p>Things I learnt while building this ?</p></AccordionTrigger>
                      <AccordionContent>
                        <span className={`text-md`}>{project.Learnings}</span>
                      </AccordionContent>
                    </AccordionItem>

                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={`flex justify-center my-6`}>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel >
  )
}

