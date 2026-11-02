// import '../Css/myprofile.css';
// import iconblog from "../assets/iconblog.png"
// import fouricon from "../assets/fouricon.png"
// import Group from "../assets/Group.png"
// import Groupone from "../assets/Groupone.png"
// import Grouptwo from "../assets/Grouptwo.png"
// import iconprofile from "../assets/iconprofile.png"
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';


// function Myprofile() {
//     const [profileOpen, setProfileOpen] = useState(false);
//     const [profileName, setProfileName] = useState("My Profile");
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         sessionStorage.removeItem("token");
//         setProfileOpen(false);
//         navigate("/login");
//     };

//     return (
//         <div>
//             {/* <div id='navcont'>
//             <nav><img id='nav' src={iconblog} alt="blog" /> </nav>
//                 <Link  to = "/MyBlogs" id='po'>Home</Link> 
//                 <p id='pt'>My Blogs</p>
//                 <p id='pth'>Contact us</p>
                 
//                 <p id='pf'>
//                      <select name="Sign Up" id="">Sign Up
                        
//                     <option><p><img src={iconprofile} alt="" /></p>My Profile</option>

//                     </select>

//                     </p>

                 
//             </div> */}
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="blog" />
//                 </nav>

//                 <Link to="/AllBlogs" id="po">
//                     Home
//                 </Link>

//                 <Link to="/MyBlogs" id="pt">
//                     My Blogs
//                 </Link>

//                 <p id="pth">Contact us</p>

//                 <div className="profile-area">
//                     {profileName ? (
//                         <div className="profile-dropdown-wrapper">
//                             <button
//                                 className="profile-trigger"
//                                 type="button"
//                                 onClick={() => setProfileOpen(!profileOpen)}
//                             >
//                                 <span className="profile-avatar">
//                                     {profileName.charAt(0).toUpperCase()}
//                                 </span>

//                                 <span className="profile-username">
//                                     {profileName}
//                                 </span>

//                                 <span>⌄</span>
//                             </button>

//                             {profileOpen && (
//                                 <div className="profile-dropdown">
//                                     <div className="profile-dropdown-user">
//                                         <span className="profile-avatar">
//                                             {profileName.charAt(0).toUpperCase()}
//                                         </span>

//                                         <span>{profileName}</span>
//                                     </div>

//                                     <Link
//                                         to="/myprofile"
//                                         className="profile-menu-link"
//                                         onClick={() => setProfileOpen(false)}
//                                     >
//                                         My Profile
//                                     </Link>

//                                     <button
//                                         className="profile-logout"
//                                         type="button"
//                                         onClick={handleLogout}
//                                     >
//                                         Logout ↪
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     ) : (
//                         <button
//                             id="btn"
//                             type="button"
//                             onClick={() => navigate("/login")}
//                         >
//                             Sign In
//                         </button>
//                     )}
//                 </div>
//             </div>

//             <div id='mainsec'>
//                 <div id='add'>
//                     <h2 id='addb'>My Profile</h2>

//                     <label id='label1' htmlFor="">Name</label><br />
//                     <input id='input1' type="text" placeholder='     Write here' />
//                     <br />
//                     <br />
//                     <label id='label2' htmlFor="">Email</label><br />
//                     <input id='input222' type="text" placeholder='     Write here' />
//                     <br />
//                     <br />
//                     {/* <label id='label3' htmlFor="">Upload image</label><br />
//                             <input id='input3' type="text" placeholder='     Write here' />
//                             <br /> */}
//                     <br />
//                     <br />
//                     <div id='btnn'>
//                         <button id='btn1'>Submit</button>
//                     </div>


//                 </div>
//             </div>




//             <div id='foot'>
//                 <footer></footer>
//                 <div id='foot1'>
//                     <br />
//                     <br />
//                     <img src={iconblog} alt="" />
//                     <br />
//                     <p>Most developer friendly & highly <br /> customisable Admin Dashboard Template</p>
//                     <br />
//                     <p><img src={fouricon} alt="" /></p>

//                 </div>
//                 <div id='foot2'>
//                     <br />
//                     <br />
//                     <p>Company</p>
//                     <br />
//                     <p>About us</p>
//                     <br />
//                     <p>Blogs</p>
//                 </div>
//                 <div id='foot3'>
//                     <br />
//                     <br />
//                     <p>Quick Links</p>
//                     <br />
//                     <p>Terms of service</p>
//                     <br />
//                     <p>Policy Privacy</p>
//                     <br />
//                     <p>Get in touch</p>
//                     <br />

//                 </div>

//                 <div id='foot4'>
//                     <br />
//                     <br />
//                     <p>Contact Us</p>
//                     <p><img src={Group} alt="" /> Info@companyname.com</p>
//                     <br />
//                     <p><img src={Groupone} alt="" />123456-789</p>
//                     <br />
//                     <p><img src={Grouptwo} alt="" />1234 Street Name, State, zip Code</p>
//                 </div>
//             </div>

//             <div id='last'>
//                 <br />
//                 <p>2025 <b>Blogs,</b>All rights reserved</p>
//             </div>
//         </div>
//     );
// }

// export default Myprofile;

// import '../Css/myprofile.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Myprofile() {
//     const [profileOpen, setProfileOpen] = useState(false);

//     const [profileName] = useState(
//         localStorage.getItem("username") ||
//         sessionStorage.getItem("username") ||
//         "My Profile"
//     );

//     const [profileImage, setProfileImage] = useState(
//         localStorage.getItem("profileImage") || ""
//     );

//     const [imageError, setImageError] = useState("");

//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         sessionStorage.removeItem("token");

//         setProfileOpen(false);
//         navigate("/login");
//     };

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];

//         if (!file) return;

//         if (!file.type.startsWith("image/")) {
//             setImageError("Please select a valid image.");
//             event.target.value = "";
//             return;
//         }

//         if (file.size > 2 * 1024 * 1024) {
//             setImageError("Image size 2 MB se kam honi chahiye.");
//             event.target.value = "";
//             return;
//         }

//         setImageError("");

//         const reader = new FileReader();

//         reader.onloadend = () => {
//             const imageData = reader.result;

//             try {
//                 localStorage.setItem("profileImage", imageData);
//                 setProfileImage(imageData);
//             } catch (error) {
//                 setImageError(
//                     "Image save nahi ho saki. Please smaller image try karo."
//                 );
//             }
//         };

//         reader.readAsDataURL(file);
//     };

//     return (
//         <div>
//             {/* Header */}
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="blog" />
//                 </nav>

//                 <Link to="/AllBlogs" id="po">
//                     Home
//                 </Link>

//                 <Link to="/MyBlogs" id="pt">
//                     My Blogs
//                 </Link>

//                 <p id="pth">Contact us</p>

//                 <div className="profile-area">
//                     <div className="profile-dropdown-wrapper">
//                         <button
//                             className="profile-trigger"
//                             type="button"
//                             onClick={() => setProfileOpen(!profileOpen)}
//                         >
//                             <span className="profile-avatar">
//                                 {profileImage ? (
//                                     <img
//                                         src={profileImage}
//                                         alt="Profile"
//                                     />
//                                 ) : (
//                                     profileName.charAt(0).toUpperCase()
//                                 )}
//                             </span>

//                             <span className="profile-username">
//                                 {profileName}
//                             </span>

//                             <span>{profileOpen ? "⌃" : "⌄"}</span>
//                         </button>

//                         {profileOpen && (
//                             <div className="profile-dropdown">
//                                 <div className="profile-dropdown-user">
//                                     <span className="profile-avatar">
//                                         {profileImage ? (
//                                             <img
//                                                 src={profileImage}
//                                                 alt="Profile"
//                                             />
//                                         ) : (
//                                             profileName.charAt(0).toUpperCase()
//                                         )}
//                                     </span>

//                                     <span>{profileName}</span>
//                                 </div>

//                                 <Link
//                                     to="/myprofile"
//                                     className="profile-menu-link"
//                                     onClick={() => setProfileOpen(false)}
//                                 >
//                                     My Profile
//                                 </Link>

//                                 <button
//                                     className="profile-logout"
//                                     type="button"
//                                     onClick={handleLogout}
//                                 >
//                                     Logout ↪
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* My Profile Form */}
//             <div id="mainsec">
//                 <div id="add">
//                     <h2 id="addb">My Profile</h2>

//                     {/* Profile Image Upload */}
//                     <div className="profile-image-section">
//                         <div className="profile-image-preview">
//                             {profileImage ? (
//                                 <img
//                                     src={profileImage}
//                                     alt="Profile Preview"
//                                 />
//                             ) : (
//                                 <span>No Image</span>
//                             )}
//                         </div>

//                         <label
//                             htmlFor="profileImageInput"
//                             className="upload-image-button"
//                         >
//                             📷 Upload Image
//                         </label>

//                         <input
//                             id="profileImageInput"
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             style={{ display: "none" }}
//                         />

//                         <p className="upload-image-help">
//                             JPG, PNG ya doosri image select karo.
//                             Maximum size: 2 MB.
//                         </p>

//                         {imageError && (
//                             <p className="upload-image-error">
//                                 {imageError}
//                             </p>
//                         )}
//                     </div>

//                     {/* Name */}
//                     <label id="label1" htmlFor="input1">
//                         Name
//                     </label>
//                     <br />

//                     <input
//                         id="input1"
//                         type="text"
//                         placeholder="Write here"
//                         defaultValue={
//                             localStorage.getItem("username") ||
//                             sessionStorage.getItem("username") ||
//                             ""
//                         }
//                     />

//                     <br />
//                     <br />

//                     {/* Email */}
//                     <label id="label2" htmlFor="input222">
//                         Email
//                     </label>
//                     <br />

//                     <input
//                         id="input222"
//                         type="email"
//                         placeholder="Write here"
//                         defaultValue={
//                             localStorage.getItem("email") ||
//                             sessionStorage.getItem("email") ||
//                             ""
//                         }
//                     />

//                     <br />
//                     <br />
//                     <br />

//                     <div id="btnn">
//                         <button id="btn1" type="button">
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <div id="foot">
//                 <footer></footer>

//                 <div id="foot1">
//                     <br />
//                     <br />
//                     <img src={iconblog} alt="Blog logo" />
//                     <br />

//                     <p>
//                         Most developer friendly &amp; highly
//                         <br />
//                         customisable Admin Dashboard Template
//                     </p>

//                     <br />

//                     <p>
//                         <img src={fouricon} alt="Social media icons" />
//                     </p>
//                 </div>

//                 <div id="foot2">
//                     <br />
//                     <br />
//                     <p>Company</p>
//                     <br />
//                     <p>About us</p>
//                     <br />
//                     <p>Blogs</p>
//                 </div>

//                 <div id="foot3">
//                     <br />
//                     <br />
//                     <p>Quick Links</p>
//                     <br />
//                     <p>Terms of service</p>
//                     <br />
//                     <p>Policy Privacy</p>
//                     <br />
//                     <p>Get in touch</p>
//                     <br />
//                 </div>

//                 <div id="foot4">
//                     <br />
//                     <br />
//                     <p>Contact Us</p>

//                     <p>
//                         <img src={Group} alt="" />
//                         Info@companyname.com
//                     </p>

//                     <br />

//                     <p>
//                         <img src={Groupone} alt="" />
//                         123456-789
//                     </p>

//                     <br />

//                     <p>
//                         <img src={Grouptwo} alt="" />
//                         1234 Street Name, State, zip Code
//                     </p>
//                 </div>
//             </div>

//             <div id="last">
//                 <br />
//                 <p>
//                     2025 <b>Blogs,</b> All rights reserved
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Myprofile;



import '../Css/myprofile.css';
import iconblog from "../assets/iconblog.png";
import fouricon from "../assets/fouricon.png";
import Group from "../assets/Group.png";
import Groupone from "../assets/Groupone.png";
import Grouptwo from "../assets/Grouptwo.png";
import iconprofile from "../assets/iconprofile.png";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Myprofile() {
    const [profileOpen, setProfileOpen] = useState(false);

    const navigate = useNavigate();

    const [profileName, setProfileName] = useState(
        localStorage.getItem("username") ||
        sessionStorage.getItem("username") ||
        ""
    );

    const [email, setEmail] = useState(
        localStorage.getItem("email") ||
        sessionStorage.getItem("email") ||
        ""
    );

    const [profileImage, setProfileImage] = useState(
        localStorage.getItem("profileImage") || ""
    );

    const [message, setMessage] = useState("");

    const handleLogout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/login");
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setMessage("Please select a valid image.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setMessage("Image size must be less than 2 MB.");
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            try {
                localStorage.setItem("profileImage", reader.result);
                setProfileImage(reader.result);
                setMessage("Profile image updated successfully!");
            } catch (error) {
                setMessage("Image could not be saved. Please choose a smaller image.");
            }
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem("username", profileName);
        localStorage.setItem("email", email);

        sessionStorage.setItem("username", profileName);
        sessionStorage.setItem("email", email);

        setMessage("Profile details saved successfully!");
    };

    return (
        <div className="profile-page">

            {/* Header — original light design */}
            <div id="navcont">
                <nav>
                    <img id="nav" src={iconblog} alt="Blogs" />
                </nav>

                <Link to="/AllBlogs" id="po">
                    Home
                </Link>

                <Link to="/MyBlogs" id="pt">
                    My Blogs
                </Link>

                <p id="pth">Contact us</p>

                <div id="pf">
                    <button
                        type="button"
                        className="profile-trigger"
                        onClick={() => setProfileOpen(!profileOpen)}
                    >
                        <img
                            className="header-profile-image"
                            src={profileImage || iconprofile}
                            alt="Profile"
                        />

                        <span>{profileName || "My Profile"}</span>

                        <span>{profileOpen ? "▲" : "▼"}</span>
                    </button>

                    {profileOpen && (
                        <div className="profile-dropdown">

                            <Link
                                to="/myprofile"
                                onClick={() => setProfileOpen(false)}
                            >
                                My Profile
                            </Link>

                            <button
                                type="button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </div>
                    )}
                </div>
            </div>

            {/* Main Profile Section */}
            <main id="mainsec">

                <section id="add">

                    <h2 id="addb">My Profile</h2>

                    <form onSubmit={handleSubmit}>

                        {/* Profile Image Upload */}
                        <div className="profile-image-section">

                            <img
                                className="profile-image-preview"
                                src={profileImage || iconprofile}
                                alt="Profile preview"
                            />

                            <label
                                htmlFor="profileImageInput"
                                className="upload-image-button"
                            >
                                Upload Image
                            </label>

                            <input
                                id="profileImageInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                hidden
                            />

                            <p className="upload-image-help">
                                Select an image. Maximum size: 2 MB.
                            </p>

                        </div>

                        {/* Name */}
                        <label id="label1" htmlFor="input1">
                            Name
                        </label>

                        <input
                            id="input1"
                            type="text"
                            placeholder="Write your name here"
                            value={profileName}
                            onChange={(event) => setProfileName(event.target.value)}
                            required
                        />

                        {/* Email */}
                        <label id="label2" htmlFor="input222">
                            Email
                        </label>

                        <input
                            id="input222"
                            type="email"
                            placeholder="Write your email here"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />

                        <div id="btnn">
                            <button id="btn1" type="submit">
                                Submit
                            </button>
                        </div>

                        {message && (
                            <p className="profile-message">
                                {message}
                            </p>
                        )}

                    </form>

                </section>

            </main>

            {/* Black Footer */}
            <footer id="foot">

                <div id="foot1">
                    <img src={iconblog} alt="Blogs" />

                    <p>
                        Most developer friendly & highly
                        <br />
                        customisable Admin Dashboard Template
                    </p>

                    <img
                        className="footer-social-icons"
                        src={fouricon}
                        alt="Social media"
                    />
                </div>

                <div id="foot2">
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Blogs</p>
                </div>

                <div id="foot3">
                    <h3>Quick Links</h3>
                    <p>Terms of service</p>
                    <p>Policy Privacy</p>
                    <p>Get in touch</p>
                </div>

                <div id="foot4">
                    <h3>Contact Us</h3>

                    <p>
                        <img src={Group} alt="" />
                        Info@companyname.com
                    </p>

                    <p>
                        <img src={Groupone} alt="" />
                        123456-789
                    </p>

                    <p>
                        <img src={Grouptwo} alt="" />
                        1234 Street Name, State, zip Code
                    </p>
                </div>

            </footer>

            <div id="last">
                <p>
                    2025 <b>Blogs,</b> All rights reserved
                </p>
            </div>

        </div>
    );
}

export default Myprofile;
