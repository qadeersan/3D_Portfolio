import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies, languages } from "../constants"


const Tech = () => {
  return (
    <>
    <div
      className="flex flex-row flex-wrap justify-center gap-2 mt-[-70px]"
    >
      {languages.map((language) => (
        <div 
          className="w-16 h-28"
          key={language.name}
        >
          <BallCanvas icon={language.icon}/>
        </div>
      ))}
    </div>
    <div
      className="flex flex-row flex-wrap justify-center gap-2 mt-[-20px] mb-[-70px]"
    >
      {technologies.map((technology) => (
        <div 
          className="w-16 h-28"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "")