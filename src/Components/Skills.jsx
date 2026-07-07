import "./Skills.css";

function Skills(){

let skills=[
"HTML",
"CSS",
"JavaScript",
"React",
"Java",
"Git"
];


return(

<section id="skills">

<h2>My Skills</h2>


<div className="skill-container">

{
skills.map((skill)=>(

<div className="skill-card" key={skill}>

{skill}

</div>

))

}

</div>


</section>

)

}

export default Skills;