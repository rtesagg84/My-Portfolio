
import React,{Component} from 'react'
import Skills from './Resumecomponents/Skills'
import SkillData from './Resumecomponents/SkillData'
import Logo from './mulelego.jfif';
import Education from './Resumecomponents/Education'
import Experience from './Resumecomponents/Experience'
import Development from './Resumecomponents/Development'
import Footer from './Resumecomponents/footer'

class Resume extends Component {

    render() {
        const data = SkillData.map(skill => <Skills key={skill.id} skill={skill} />)

        return (

            <div className="Resume-shadow">

                <div className="ui Resume" style={{ textAlign: 'center' }}  >
                    <h4 className="Resume-header" ><img src={Logo} alt="Logo" align="center" height="70" /> Aster Ghebreyesus </h4>
                     <p className='Resume-Primary' > Baltimore,MD ,612-226-7135,astukahiwet@gmail.com</p>
                     <p>Permanent Work Authorization. No Visa sponsorship required </p>
                    <hr style={{ boredTop: '6px solid #833fb2', width: '80' }} ></hr>
                </div>

                <div >
                    <h3 className="Resume-center " >Professional Summary : </h3>
                    <p className="Resume-paragraph" >
                    	Software Engineer with 5+ years of experience in developing enterprise level web and windows-based applications and SDLC processes including documentation, form designs, coding, unit testing and defect resolution.</p>
                    <p>	More  than 2 years with   technical support, supervisory leadership for intern level developers and monitoring students. </p>
                </div>


                <div  className="Skill Matrix">
                    <h3 className="Resume-center"> Skill Matrix:</h3>
                    <div className="Resume-height">{data}</div>
                    
                </div>

                <div className="Experience"> 
                    <h3 className="Resume-center"> Professional Experience:</h3>
                     <Experience />
                </div>
                
                <div className="Education">
                    <h3 className="Resume-center">Education: </h3>
                    <Education />
                </div>

                <div className="ProfDevelopment">
                    <h3 className="Resume-center1">Professional Development:</h3>
                    <div >
                        <Development />
                    </div>

                </div>
                <Footer pageNo="page1" />


            </div>

        )
    }
} export default Resume;
