import React from "react";
import "./MainProjectPage.css";
import SubProjects from "./SubProjects";
import photo1 from "../../TestFiles/picture1.jpg";
import photo2 from "../../TestFiles/picture2.jpg";
import photo3 from "../../TestFiles/picture3.jpg";
import photo4 from "../../TestFiles/picture4.jpg";

 const  Projects=[
    {id :"Project1", name: "ARITIFICAL INTELLIGENCE",photo:photo1, role: "DEVELOPER", p1:"Artificial intelligence (AI) is the ability of machines to perform tasks that are typically associated with human intelligence, such as learning and problem-solving.",p2:"Artificial intelligence was founded as an academic discipline in 1956.[2] The field went through multiple cycles of optimism[3][4] followed by disappointment and loss of funding,[5][6] but after 2012, when deep learning surpassed all previous AI techniques,[7] there was a vast increase in funding and interest."},
 {id: "Project2", name: "MACHINE LEARNING",photo:photo2, role: "TEAM LEAD",p1:"Machine learning (ML) is an umbrella term for solving problems for which development of algorithms by human programmers would be cost-prohibitive, and instead the problems are solved by helping machines 'discover' their 'own' algorithms.",p2:"Recently, generative artificial neural networks have been able to surpass results of many previous approaches.[3][4] Machine learning approaches have been applied to large language models, computer vision, speech recognition, email filtering, agriculture and medicine"},
  {id: "Project3", name: "CLOUD COMPUTING",photo:photo3, role: "SENIOR DEVELOPER",p1:"Cloud computing is on-demand access, via the internet, to computing resources—applications, servers (physical servers and virtual servers), data storage, development tools, networking capabilities, and more—hosted at a remote data center managed by a cloud services provider (or CSP).",p2:"Cloud provides elasticity—instead of purchasing excess capacity that sits unused during slow periods, you can scale capacity up and down in response to spikes and dips in traffic. You can also take advantage of your cloud provider’s global network to spread your applications "},
  {id: "Project4", name: "CYBER SECURITY",photo:photo4, role: "PENETRATION TESTER",p1:"Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats. As cyberattacks become more common and sophisticated and corporate networks grow more complex, a variety of cyber security solutions are required to mitigate corporate cyber risk.",p2:"Most attacks occur over the network, and network security solutions are designed to identify and block these attacks. These solutions include data and access controls such as Data Loss Prevention (DLP), IAM (Identity Access Management), NAC (Network Access Control), and NGFW (Next-Generation Firewall) application controls to enforce safe web use policies."}];

function MainProjectPage()
{
    return(
    <div className="MainProject">
     <h1>Projects</h1>
     <div className="projectnames">
      {Projects.map((project)=>(<SubProjects  key= {project.id} name={project.name}/>))}
     </div>
    </div>);
}
export default MainProjectPage;
export {Projects};