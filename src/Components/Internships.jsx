import "./Internships.css";

function Internships(){

const experiences = [

{
title:"Data Mining Intern",
company:"Fantasy Solutions",
duration:"15 days",
description:
"Worked on data mining techniques, data preprocessing, and analysis to extract valuable insights from large datasets."
},

{
title:"AI and OOPs Workshop",
company:"VEI Technologies",
duration:"5 Days Workshop",
description:
"Gained hands-on experience in Artificial Intelligence and Object-Oriented Programming concepts through practical exercises and projects."
},

{
title:"AR/VR Workshop",
company:"DSU",
duration:"5 Days Workshop",
description:
"Gained practical knowledge in AR/VR development, including 3D modeling and interactive design principles."
},

{
title:"Full Stack Development Workshop",
company:"DSU",
duration:"2 Days Workshop",
description:
"Gained practical knowledge in full stack development, including frontend and backend technologies."
}

];


return(

<section id="internships">

<h2>
Internships & Workshops
</h2>


<div className="experience-container">

{
experiences.map((item,index)=>(

<div className="experience-card" key={index}>


<h3>
{item.title}
</h3>


<h4>
{item.company}
</h4>


<span>
{item.duration}
</span>


<p>
{item.description}
</p>


</div>

))
}


</div>


</section>

)

}

export default Internships;