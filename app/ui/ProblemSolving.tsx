import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { jetbrains } from '../lib/font';

const ojs = [
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    profile: "https://leetcode.com/rafidoth/",
    color: "text-amber-500"
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces />,
    profile: "https://codeforces.com/profile/l000ser",
    color: "text-red-500"
  }
]

export default function ProblemSolving() {
  return (
    <div className="flex  flex-col gap-4 justify-center items-center h-full">
      <div>
        {ojs.map((oj) => {
          return (
            <span className={`bg-zinc-800 rounded-md text-xl ${jetbrains.className}`} key={oj.name}>
              <Link href={oj.profile} target="_blank">
                <span className={`flex items-center gap-x-2 px-2 py-1 `}>
                  <span className={oj.color}>
                    {oj.icon}
                  </span>
                  {oj.name}
                  <FiExternalLink />
                </span>
              </Link>
            </span>
          )
        })}
      </div>
    </div >
  )
}

