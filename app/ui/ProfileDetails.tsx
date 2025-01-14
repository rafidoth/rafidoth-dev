import React from 'react'
import { gloria, jetbrains } from '@/app/lib/font'
import SocialBox from './SocialBox'
import { Button } from '@/components/ui/button'
import { Projects } from '@/app/ui/Projects'
import TechnologyTab from './TechnologyTab'
import ProblemSolving from './ProblemSolving'



const tabs = [
  "Resume",
  "Things I Built",
  "Problem Solving",
  //"Education",
  "Blog",
  "Youtube",
  "Technologies"
]


const notReady = ["Blog", "Youtube"]


export default function ProfileDetails() {
  const [selectedTab, setSelectedTab] = React.useState<string>("Things I Built")
  return (
    <div className={`w-full md:w-[500px]`}>
      <div className={`flex flex-col `}>
        {/* Introduction*/}
        <div className={`flex justify-start`}><span className={`${gloria.className} text-lg`}>S Rafiul Hasan</span></div>
        <div className={`flex items-center gap-x-2`}>
          <span className={`${jetbrains.className} font-bold text-4xl`}>@rafidoth</span>
          <SocialBox />
        </div>
        <span className={`text-lg`}>An average computer science fanboy.</span>
      </div>
      <div className={`w-full md:px-2 my-6`}>
        <div className={`flex flex-wrap w-[300px] md:w-[400px] gap-2 `}>
          {tabs.map((tabName) => {
            if (notReady.includes(tabName)) return <Button key={tabName} variant="default" className="bg-zinc-800 text-white shadow cursor-not-allowed"><s>{tabName}</s></Button>
            return <Button
              key={tabName}
              onClick={() => setSelectedTab(tabName)}
              variant="default"
              className={`${selectedTab === tabName ? "bg-green-500 text-black" : "bg-zinc-800 text-white shadow hover:bg-zinc-800/[0.5] "}`
              }
            > {tabName}</Button>
          })}
        </div>
      </div>
      <div className={`w-full md:flex justify-center my-6 mx-3`}>
        <div className={`min-h-80`}>
          {GetTabContent(selectedTab)}
        </div>
      </div>
    </div >
  )
}


function GetTabContent(tabName: string) {
  switch (tabName) {
    case "Things I Built":
      return <Projects />
    case "Technologies":
      return <TechnologyTab />
    case "Resume":
      return <div>Resume</div>
    case "Problem Solving":
      return <ProblemSolving />
    //case "Education":
    //  return <div>Education</div>
    case "Blog":
      return <div>Blog</div>
    case "Youtube":
      return <div>Youtube</div>
    default:
      return <div>Not Ready</div>
  }
}
























