"use client"
import clsx from 'clsx';
import React from 'react';
import ProfilePicture from '@/app/ui/ProfilePicture';
import ProfileDetails from '@/app/ui/ProfileDetails';






export default function Home() {
  const [brightState, setBrightState] = React.useState<boolean>(false)
  return (
    <div
      className={
        clsx(
          'w-full min-h-screen flex  justify-center items-center bg-cover bg-center bg-transition',
          {
            "md:bg-[url('/bg_bw.png')]": !brightState,
            "md:bg-[url('/bg_col.png')]": brightState,
          }
        )}>

      <div className={` flex flex-col items-start md:items-center md:flex-row md:justify-between w-full md:w-[1000px] md:mx-5 md:border-dashed md:border md:border-zinc-500/[0.2] p-10 rounded-md overflow-hidden`}>
        <div><ProfilePicture brightState={brightState} setBrightState={setBrightState} /></div>
        <div>
          <ProfileDetails />
        </div>
      </div>
    </div>
  );
}
