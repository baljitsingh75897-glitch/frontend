import '../Css/withLogin.css';
import iconblog from "../assets/iconblog.png"
import fouricon from "../assets/fouricon.png"
import Group from "../assets/Group.png"
import Groupone from "../assets/Groupone.png"
import Grouptwo from "../assets/Grouptwo.png"
import iconprofile from "../assets/iconprofile.png"


function Withlogin(){

    return(
        <div>
            <div id='navcont'>
            <nav><img id='nav' src={iconblog} alt="blog" /> </nav>
                <p id='po'>Home</p> 
                <p id='pt'>My Blogs</p>
                <p id='pth'>Contact us</p>
                 
                <p id='pf'>
                     <select name="Sign Up" id="">Sign Up
                    <option><p><img src={iconprofile} alt="" /></p>My Profile</option>
                    </select>
                    

                    </p>

                 
                
                
            </div>
            <div id='fooot'>
                <footer></footer>
                <div id='foot1'>
                    <br />
                    <br />
                    <img src={iconblog} alt="" />
                    <br />
                    <p>Most developer friendly & highly <br /> customisable Admin Dashboard Template</p>
                     <br />
                    <p><img src={fouricon} alt="" /></p>

                </div>
                <div id='foot2'>
                    <br />
                    <br />
                    <p>Company</p>
                    <br />
                    <p>About us</p>
                    <br />
                    <p>Blogs</p>
                </div>
                <div id='foot3'>
                    <br />
                    <br />
                    <p>Quick Links</p>
                    <br />
                    <p>Terms of service</p>
                    <br />
                    <p>Policy Privacy</p>
                    <br />
                    <p>Get in touch</p>
                    <br />
                    
                </div>

                <div id='foot4'>
                     <br />
                     <br />
                    <p>Contact Us</p>
                    <p><img src={Group} alt="" /> Info@companyname.com</p>
                    <br />
                    <p><img src={Groupone} alt="" />123456-789</p>
                    <br />
                    <p><img src={Grouptwo} alt="" />1234 Street Name, State, zip Code</p>
                </div>
            </div>
            
                <div id='last'>
                    <br />
                    <p>2025 <b>Blogs,</b>All rights reserved</p>
                </div>
        </div>
    )
}
export default Withlogin;