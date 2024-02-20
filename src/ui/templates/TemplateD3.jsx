import { useState } from "react";
import { selectUserData } from "../../reduxToolkit/FormDataSlice.jsx";
import { useSelector } from "react-redux";
function TemplateD3() {
  const [count, setCount] = useState(0);
  const userInputData = useSelector(selectUserData);
  return (
    <div
      className="TemplateD3 flex flex-col items-center justify-center bg-[rgb(192,219,255)] w-[794px] h-[1123px] max-h-[1123px] lg:overflow-auto mt-[-150px] "
      style={{ transform: "scale(0.7)" }}
    >
      <div className="h-[230px] bg-[rgb(2,87,148)] w-[95%] mt-5 rounded-[150px]">
        <div className="flex flex-row items-center justify-evenly">
          <div className="h-[200px] w-[200px] bg-[rgb(235,236,231)] ml-[-20px] mt-[20px] rounded-[50%]"></div>
          <div className="flex flex-col items-center justify-center bg-white w-[400px] h-[150px] mt-[25px] ml-[30px]  rounded-[50px_100px_100px_50px] border-2 border-solid border-[rgba(1,63,107,)]">
            <div className="flex flex-row text-[40px] text-[rgb(1,63,107)] mt-[-20px] m-6 p-0">
              <p className="firstname  mr-3">{userInputData && userInputData.firstName
                  ? userInputData.firstName
                  : "Devraj"}</p>
              <p className="lastname">{userInputData && userInputData["last-name"]
                  ? userInputData["last-name"]
                  : "Patil"}</p>
            </div>
            <hr className="w-[300px] border -mt-5 border-solid border-[rgb(1,63,107)]" />
            <div className="text-xl text-[rgb(1,63,107)] m-0 p-0">
              <p>{userInputData && userInputData["email-address"]
                  ? userInputData["email-address"]
                  : "cdc@cdc.cdc"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-3/4 w-full bg-[rgb(192,219,255)]">
        <div className="bg-[rgba(255,255,255,0.448)] w-[720px] h-[200px] mt-[70px] m-[38px] rounded-[25px]">
          <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
            About me
          </h2>
          <div className="text-[17px] text-[rgb(77,77,77)] m-[15px]">
            <p>
              Human resources generalist with 8 years of experience in HR,
              including hiring and terminating, disciplining employees and
              helping department managers improve employee performance. Worked
              with labor unions to negotiate compensation packages for workers.
              Organized new hire training initiatives as well as ongoing
              training to adhere to workplace safety standards. Worked with OSHA
              to ensure that all safety regulations are followed.
            </p>
          </div>
        </div>

        <hr className="w-[650px] border ml-[65px] mt-5 border-solid border-[rgb(1,63,107)]" />
        <div className="bg-[rgba(255,255,255,0.448)] w-[720px] h-[200px] m-[38px] rounded-[25px]">
          <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
            Skills
          </h2>
          <ul className="text-[17px] text-[rgb(77,77,77)] m-[15px] mt-[-10px]">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <hr className="w-[650px] border ml-[65px] mt-5 border-solid border-[rgb(1,63,107)]" />
        <div className="bg-[rgba(255,255,255,0.448)] w-[720px] h-[200px] m-[38px] rounded-[25px]">
          <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
            Education
          </h2>
          <ul className="text-[17px] text-[rgb(77,77,77)] m-[15px]  ">
            <li>Studied from Hardward university</li>
            <li>Studied from Hardward university</li>
            <li>Studied from Hardward university</li>
            <li>Studied from Hardward university</li>
            <li>Studied from Hardward university</li>
          </ul>
        </div>
        {/* Adding additional sections based on userData */}
        {/* Languages */}
        {userInputData && userInputData.language ? (
          <>
            <hr className="w-[650px] border ml-[65px] mt-5 border-solid border-[rgb(1,63,107)]" />
            <div className="languagesD3 bg-[rgba(255,255,255,0.448)] w-[720px] h-[200px] max-h-[200px] overflow-auto m-[38px] rounded-[25px] ">
              <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
                Languages
              </h2>
              {userInputData.language.map((lan) => {
                return (
                  <ul
                    key={lan[2]}
                    className="text-[17px] text-[rgb(77,77,77)] m-[15px]"
                  >
                    <li className="list-item-D3 text-black  w-[150px]">
                      {lan[0]} - {lan[1]}
                    </li>
                  </ul>
                );
              })}
            </div>
          </>
        ) : null}

        {/* Projects */}
        {userInputData && userInputData.projects ? (
          <div>
            <hr className="w-[650px] border ml-[65px] mt-5 border-solid border-[rgb(1,63,107)]" />
            <div className="projectsD3  bg-[rgba(255,255,255,0.448)] w-[720px] overflow-x-hidden max-h-[200px] overflow-auto m-[38px]  rounded-[25px]">
              <h2 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
                Projects
              </h2>
              {userInputData.projects.slice(1).map((project) => {
                return (
                  <ul
                    key={project.id}
                    className=" text-[rgb(77,77,77)] m-[15px] "
                  >
                    <li className=" w-full list-item-D3 text-black ">
                      <div className="project-header flex flex-row gap-[15px] items-center">
                        <h2 className="text-[23px] heading-D3">
                          {project.Heading}
                        </h2>
                        <a
                          href={project.Link}
                          className="text-md text-cyan-600 cursor-pointer"
                        >
                          {project.Link}
                        </a>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                      />
                    </li>
                  </ul>
                );
              })}
            </div>
            <hr />
          </div>
        ) : null}

        {/* Custom Form */}
        {userInputData && userInputData.customData
          ? userInputData.customData.slice(1).map((customData) => {
              return (
                <>
                  <hr className="w-[650px] border ml-[65px] mt-5 border-solid border-[rgb(1,63,107)]" />
                  <div className="customD3 bg-[rgba(255,255,255,0.448)] w-[720px] overflow-x-hidden  max-h-[200px] overflow-auto m-[38px] rounded-[25px]">
                    <ul
                      key={customData.id}
                      className=" text-[17px] text-[rgb(77,77,77)] m-[15px] "
                    >
                      <li className=" w-full list-item-D3 text-black ">
                        <h1 className="text-[25px] font-[bold] text-[rgb(99,133,255)] m-[15px]">
                          {customData.Custom_Heading}
                        </h1>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: customData.description,
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default TemplateD3;
