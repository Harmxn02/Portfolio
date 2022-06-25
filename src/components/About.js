// import MaterialIconsReact from "material-icons-react";
// // https://fonts.google.com/icons
import profile from "../svg/profile.svg"
import geniuses from "../svg/geniuses.svg"

export default function About() {
    return (
        <div className="flex flex-wrap justify-center min-h-screen mt-12 md:mt-36 gap-36 lg:gap-72">
            <div className="flex flex-col xl:flex-row-reverse justify-between items-center xl:gap-0">
                <div className="text-gray-700 rounded-md shadow-2xl p-8 m-5 border-4 border-t-orange-500 w-screen max-w-xl h-fit space-y-4">
                    <h2 className="font-bold text-xl pb-4">Personal Experience</h2>
                    <p className="pb-4">I started programming in May of 2020, after find out about Harvard's CS50. I was immediately hooked on coding, and decided right then and there I wanted to do this for a living. I got extremely lucky that I could turn my hobby into a profession, and that there's a specific University Degree for it.</p>
                    <p className="pb-4">I'm a first-year Computer Science student at HOWEST University of Applied Sciences. In my second year I will choose to specialize in <strong>Artificial Intelligence</strong>. I am extremely interested in this field and the opportunities it will give me.</p>
                    <p className="pb-4">I have an (for the time being) empty blog on Dev Community, which you can visit by clicking <a className="text-orange-600 hover:text-purple-600 font-semibold" href="https://dev.to/harmxn" target="_blank" rel="noreferrer">here</a>.</p>
                    {/* <div className="float-right">
                        <MaterialIconsReact icon="school" size="large"/>
                    </div> */}
                </div>
                <div className="w-4/6 mr-12">
                    <img src={profile}></img>
                </div>
            </div>
            
            <div className="flex flex-col xl:flex-row justify-between items-center gap-16 xl:gap-0">
                <div className="text-gray-700 rounded-md shadow-2xl p-8 m-5 border-4 border-t-purple-500 w-screen max-w-xl h-fit space-y-4">
                    <h2 className="font-bold text-xl pb-4">Skills</h2>
                    <p className="font-medium text-gray-700 text-md">Front End</p>
                    <div className="flex gap-2 flex-wrap">
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">HTML / CSS</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Responsive Design</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">JavaScript</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">TypeScript</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">React</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Tailwind CSS</p>
                    </div>

                    <p className="font-medium text-gray-700 text-md">Back End</p>
                    <div className="flex gap-2 flex-wrap">
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Java (Vert.x)</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">PHP (Laravel)</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Databases (MySQL)</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Unit Tests</p>
                    </div>

                    <p className="font-medium text-gray-700 text-md">Other</p>
                    <div className="flex gap-2 flex-wrap">
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Java (OOP)</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">REST API</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Python</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">C#</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Git Bash</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">GitHub / GitLab</p>
                    </div>

                    <p className="font-medium text-gray-700 text-md">Development Tools</p>
                    <div className="flex gap-2 flex-wrap">
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Figma</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Adobe XD</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Lucid Chart</p>
                        <p className="bg-gray-200 rounded p-2 text-xs font-medium hover:scale-105 ease-in-out duration-300">Agile Methodologies</p>
                    </div>



                    <p className="pb-5 pt-5">If you'd like to find out even more, my resume is linked below.</p>
                    <div>
                        <a className="text-white font-bold bg-purple-500 hover:bg-blue-600 rounded-lg p-2 " 
                        href="https://resume.io/r/SU1DQos8n" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                    
                    {/* <div className="float-right">
                        <MaterialIconsReact icon="construction" size="large"/>
                    </div> */}
                </div>
                <div className="w-4/6">
                    <img src={geniuses}></img>
                </div>
            
                
            </div>
        </div>
        )
    }