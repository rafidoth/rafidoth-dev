import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";
import { PiGlobeDuotone } from "react-icons/pi";
import { SiSqlite } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { gloria } from "./font";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { SiNeovim } from "react-icons/si";
import { FaDocker } from "react-icons/fa";


export function Technology({ name }: { name: string }) {
  switch (name) {
    case "nextjs":
      return <span className={`text-zinc-500`}><RiNextjsFill /></span >;
    case "typescript":
      return <span className={`text-sky-500`}><BiLogoTypescript /></span >;
    case "react":
      return <span><FaReact /></span >;
    case "golang":
      return <span><TbBrandGolang /></span >;
    case "web":
      return <span className={`text-red-500`}><PiGlobeDuotone /></span >;
    case "sqlite3":
      return <span className={`text-sky-500`} ><SiSqlite /></span>
    case "java":
      return <span className={`text-red-500`} ><FaJava /></span>
    case "javascript":
      return <span className={`text-yellow-500`}><RiJavascriptFill /></span>;
    case "golang-alt":
      return <span className={`text-blue-500`}><FaGolang /></span>;
    case "git":
      return <span className={`text-orange-500`}><FaGitAlt /></span>;
    case "reactjs":
      return <span className={`text-blue-500`}><GrReactjs /></span>;
    case "nodejs":
      return <span className={`text-green-500`}><DiNodejs /></span>;
    case "neovim":
      return <span className={`text-green-500`}><SiNeovim /></span>;
    case "docker":
      return <span className={`text-blue-500`}><FaDocker /></span>;
    default:
      return <span className={`${gloria.className} text-sm`}>{name} </span>;
  }
}
