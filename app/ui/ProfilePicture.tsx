"use client"
import React from 'react'
import Image from 'next/image'
import casual from '@/public/casual.png'
import formal from '@/public/formal.png'
import casuabw from '@/public/casualbw.png'
import formalbw from '@/public/formalbw.png'
import { ReactNode } from 'react'
import { Switch } from "@/components/ui/switch"
import { gloria } from '@/app/lib/font'


const getPicturePng = function(name: string) {
  if (name === 'casual') {
    return casual
  } else if (name === 'formal') {
    return formal
  } else if (name === 'casualbw') {
    return casuabw
  } else {
    return formalbw
  }
}

const getImageComponentFromPicture = function(name: string): { imageComp: ReactNode, name: string } {
  return {
    imageComp: <div className={`w-[100px] md:w-[200px]`}><Image
      className={`rounded`}
      src={getPicturePng(name)}
      alt="Picture of the author"
    /></div>,
    name: name
  }
}

const getImage = function(isCasual: boolean, hovered: boolean): { imageComp: ReactNode, name: string } {
  if (isCasual && hovered) {
    return getImageComponentFromPicture('casual')
  } else if (isCasual && !hovered) {
    return getImageComponentFromPicture('casualbw')
  } else if (!isCasual && hovered) {
    return getImageComponentFromPicture('formal')
  } else {
    return getImageComponentFromPicture('formalbw')
  }
}

interface ProfilePictureProps {
  brightState: boolean;
  setBrightState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProfilePicture({ brightState, setBrightState }: ProfilePictureProps) {
  const [isCasual, setIsCasual] = React.useState<boolean>(false)
  return (
    <div className={`w-[300px] flex flex-col items-start md:items-center gap-y-5 rounded-full`}>
      <div
        className={`rounded border border-dashed border-zinc-500/[0.5]`}
        onMouseEnter={() => setBrightState(true)}
        onMouseLeave={() => setBrightState(false)}
      >
        {getImage(isCasual, brightState).imageComp}
      </div>
      <span className={`${gloria.className} text-sm hidden md:inline`}>
        {getImage(isCasual, brightState).name}.png
      </span>
      <Switch
        className={`hidden md:block`}
        checked={isCasual}
        onCheckedChange={() => setIsCasual(!isCasual)}
      />
    </div>
  )
}

