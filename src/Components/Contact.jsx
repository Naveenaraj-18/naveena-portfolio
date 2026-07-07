import "./Contact.css";

function Contact(){

return(

<section id="contact">

<h2>Contact Me</h2>


<div className="contact-container">


<div className="contact-info">

<h3>Let's Connect</h3>

<p>
I am interested in Web development,
web applications and cloud technologies.
</p>


<p>
📧 Email:
<br/>
naveenat1807@gmail.com
</p>


<p>
📱 Phone:
<br/>
+91 8148111913
</p>


<p>
📍 Location:
<br/>
India
</p>


</div>



<form>


<input 
type="text"
placeholder="Your Name"
/>


<input 
type="email"
placeholder="Your Email"
/>


<textarea
placeholder="Your Message">
</textarea>


<button>
Send Message
</button>


</form>


</div>


</section>

)

}


export default Contact;