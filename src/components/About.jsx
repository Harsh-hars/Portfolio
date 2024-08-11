import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, myself <span className="text-red-500 text-xl underline">Harsh Bhadauriya</span> persued <span className="text-red-500 text-xl underline">BCA</span>  From UCC Agra.<br/>
          Passionate about learning and consistently advancing my knowledge and skills.<br/>
          Greatful while contributing to friend's project .<br/>
          Exited to learn from each day.<br/>
          Ability be work in team
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          <span className="text-red-500 text-xl underline">[BCA]</span> UCC Khandari Agra [2021-2024] 
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in developing full stack web application , problem solving <br/>
          <ul className="list-disc mx-4">

            <li>Problem Solving</li>
            <li>Web Applications</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind Css</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>MongoDB</li>
            <li>MySQl</li>
            <li>Wordpress</li>
            <li>Team Working</li>
            <li>MS Office</li>
          </ul>

        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
      <ul className="list-disc mx-4">
        <li>Web Developer at <span className="text-orange-500 underline text-xl">Blessing Foundation</span> </li>
        <li>Virtual Internship at <span className="text-red-500 underline text-xl">Hyrstic Solutions</span> </li>
        <li>MERN Stack intern at <span className="text-red-500 underline text-xl">Technostars</span> </li>
      </ul>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to push my skills to next level so that i can be the part of my Dream company and contribute my skills to their projects ..
        </p>
      </div>
    </div>
  );
}

export default About;
