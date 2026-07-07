import "./Hackathons.css";

function Hackathons(){

const hackathons=[
    {
        title:"Smart India Hackathon",
        description:
        "Participated in a team-based hackathon and worked on innovative solutions using technology."
    },

    {
        title:"MSME Idea Hackathon 5.0",
        description:
        "Participated in a national-level hackathon and developed a prototype for a real-world problem statement."
    },

    {
        title:"Tata Technologies Innovent Hackathon",
        description:
        "Participated in a corporate hackathon and collaborated with a team to create a functional prototype."
    },

    {
        title:"Genai Hackathon",
        description:
        "Participated in a hackathon focused on Generative AI and developed an AI-powered application."
    },

    {
        title:"Pragati AI for Impact Hackathon 2025",
        description:
        "Participated in a hackathon focused on AI for social impact and developed a solution to address a societal challenge."
    },

    {
        title:"ANICAT'25",
        description:
        "Participated in free national aptitude test and career assessment organised by Narkuri Campus"
    }



];


return(

<section id="hackathons">

<h2>Hackathons</h2>


<div className="hackathon-container">

{
hackathons.map((item,index)=>(

<div className="hack-card" key={index}>

<h3>{item.title}</h3>

<p>{item.description}</p>

</div>

))
}

</div>


</section>

)

}

export default Hackathons;