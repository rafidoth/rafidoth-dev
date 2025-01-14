"use client"
import React from 'react'
import { VscGithubAlt } from "react-icons/vsc";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';

export default function SocialBox() {
  const [ghHovered, setGhHovered] = React.useState(false);
  const [lHovered, setLHovered] = React.useState(false);
  const [mailHovered, setMailHovered] = React.useState(false);
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "90px",
        fontSize: "1.5em",
      }}
    >
      <Link href="https://github.com/rafidoth" target="_blank">
        <VscGithubAlt
          style={{ cursor: "pointer" }}
          color={ghHovered ? "rgb(255, 87, 34)" : "rgba(255, 255, 255, 0.3)"}
          onMouseEnter={() => setGhHovered(true)}
          onMouseLeave={() => setGhHovered(false)}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/rafidoth/" target="_blank">
        <GrLinkedinOption
          style={{ cursor: "pointer" }}
          color={lHovered ? "rgb(0, 119, 181)" : "rgba(255, 255, 255, 0.3)"}
          onMouseEnter={() => setLHovered(true)}
          onMouseLeave={() => setLHovered(false)}
        />
      </Link>
      <Link href="mailto:rafiulhasan803@gmail.com?subject=Hello%20world%20!" target="_blank">
        <SiGmail
          style={{ cursor: "pointer" }}
          color={mailHovered ? "rgb(241, 196, 15)" : "rgba(255, 255, 255, 0.3)"}
          onMouseEnter={() => setMailHovered(true)}
          onMouseLeave={() => setMailHovered(false)}
        />
      </Link>
    </span>
  )
}
