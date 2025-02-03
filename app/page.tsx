"use client"
import clsx from 'clsx';
import React from 'react';
import ProfilePicture from '@/app/ui/ProfilePicture';
import ProfileDetails from '@/app/ui/ProfileDetails';
import { GridPattern } from "@/components/ui/grid-pattern";



export default function Home() {
  const [brightState, setBrightState] = React.useState<boolean>(false)
  return (
    <div
      className={
        clsx(
          `w-full min-h-screen  flex  justify-center items-center `,
        )}>
      <GridPatternLinearGradient />
      <div className={` flex flex-col items-start md:items-center md:flex-row md:justify-between w-full md:w-[900px] md:mx-5 p-10 rounded-md overflow-hidden`}>
        <div><ProfilePicture brightState={brightState} setBrightState={setBrightState} /></div>
        <div>
          <ProfileDetails />
        </div>
      </div>
    </div>
  );
}

function GridPatternLinearGradient() {
  return (
    <GridPattern
      width={20}
      height={20}
      x={-1}
      y={-1}
      className={"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "}
    />
  );
}

function GridPatternDashed() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Grid Pattern
      </p>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        classname={"[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"}
      />
    </div>
  );
}

