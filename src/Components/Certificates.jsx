import "./Certificates.css";


function Certificates(){


const certificates=[

"AWS Cloud Fundamentals Certification",

"Qube'IT 2K24 ",

"Intercollegiate Soft Skill Competition 2025"

];


return(

<section id="certificates">


<h2>Certificates</h2>


<div className="certificate-container">


{
certificates.map((certificate,index)=>(

<div 
className="certificate-card"
key={index}
>

🏆 {certificate}

</div>

))

}


</div>


</section>

)

}


export default Certificates;