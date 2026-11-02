// import '../Css/MyBlogs.css';
// import iconblog from "../assets/iconblog.png"
// import fouricon from "../assets/fouricon.png"
// import Group from "../assets/Group.png"
// import Groupone from "../assets/Groupone.png"
// import Grouptwo from "../assets/Grouptwo.png"
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function MyBlogs(){
//         const navigate = useNavigate();
//     return(

//         <div>
//             <div id='navcont'>
//             <nav><img id='nav' src={iconblog} alt="blog" /> </nav>
//                 <Link to = "/MyBlogs" id='po'>Home</Link> 
//                 <p id='pt'>My Blogs</p>
//                 <p id='pth'>Contact us</p>
//                 <p id='pf'><button id='btn'>Sign In </button></p>

//             </div>
//             <div >


//                 <button id='addbut' onClick={() => navigate('/addblog')}>Add Blog</button>
//             </div>
//                 <div>
//                     <h1 id='myblogs'>My Blogs</h1>
//                     </div>

//             <div id='foot123'>
//                 <footer></footer>
//                 <div id='foot1'>
//                     <br />
//                     <br />
//                     <img src={iconblog} alt="" />
//                     <br />
//                     <p>Most developer friendly & highly <br /> customisable Admin Dashboard Template</p>
//                      <br />
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
//                      <br />
//                      <br />
//                     <p>Contact Us</p>
//                     <p><img src={Group} alt="" /> Info@companyname.com</p>
//                     <br />
//                     <p><img src={Groupone} alt="" />123456-789</p>
//                     <br />
//                     <p><img src={Grouptwo} alt="" />1234 Street Name, State, zip Code</p>
//                 </div>
//             </div>

//                 <div id='last'>
//                     <br />
//                     <p>2025 <b>Blogs,</b>All rights reserved</p>
//                 </div>
//         </div>
//     )
// }
// export default MyBlogs;



// import '../Css/MyBlogs.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function MyBlogs() {
//     const navigate = useNavigate();

//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchMyBlogs = async () => {
//             const token =
//                 localStorage.getItem('token') ||
//                 sessionStorage.getItem('token');

//             if (!token) {
//                 setError('Please login first to see your blogs.');
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(
//                     'http://localhost:3000/api/blog/getMyBlogs',
//                     {
//                         method: 'GET',
//                         headers: {
//                             'Authorization': `Bearer ${token}`
//                         }
//                     }
//                 );

//                 const result = await response.json();

//                 if (!response.ok) {
//                     throw new Error(
//                         result.message || 'Blogs load nahi hue.'
//                     );
//                 }

//                 setBlogs(
//                     Array.isArray(result.data) ? result.data : []
//                 );

//             } catch (err) {
//                 setError(
//                     err.message || 'Backend se connection nahi ho raha.'
//                 );
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMyBlogs();
//     }, []);

//     return (
//         <div>
//             <div id='navcont'>
//                 <nav>
//                     <img id='nav' src={iconblog} alt="blog" />
//                 </nav>

//                 <Link to="/MyBlogs" id='po'>Home</Link>
//                 <p id='pt'>My Blogs</p>
//                 <p id='pth'>Contact us</p>

//                 <p id='pf'>
//                     <button
//                         id='btn'
//                         onClick={() => navigate('/login')}
//                     >
//                         Sign In
//                     </button>
//                 </p>
//             </div>

//             <div>
//                 <button
//                     id='addbut'
//                     onClick={() => navigate('/addblog')}
//                 >
//                     Add Blog
//                 </button>
//             </div>

//             <div>
//                 <h1 id='myblogs'>My Blogs</h1>
//             </div>

//             {/* Blog data header aur footer ke beech show hoga */}
//             <div
//                 style={{
//                     padding: '30px',
//                     minHeight: '220px'
//                 }}
//             >
//                 {loading && <p>Loading blogs...</p>}

//                 {error && (
//                     <p style={{ color: 'red' }}>{error}</p>
//                 )}

//                 {!loading && !error && blogs.length === 0 && (
//                     <p>No blogs added yet.</p>
//                 )}

//                 <div
//                     style={{
//                         display: 'grid',
//                         gridTemplateColumns:
//                             'repeat(auto-fit, minmax(240px, 1fr))',
//                         gap: '20px'
//                     }}
//                 >
//                     {blogs.map((blog) => (
//                         <div
//                             key={blog._id}
//                             style={{
//                                 border: '1px solid #ddd',
//                                 borderRadius: '8px',
//                                 padding: '20px',
//                                 overflowWrap: 'anywhere'
//                             }}
//                         >
//                             <h2>{blog.title}</h2>

//                             <p style={{ whiteSpace: 'pre-wrap' }}>
//                                 {blog.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div id='foot123'>
//                 <footer></footer>

//                 <div id='foot1'>
//                     <br />
//                     <br />
//                     <img src={iconblog} alt="" />
//                     <br />
//                     <p>
//                         Most developer friendly & highly <br />
//                         customisable Admin Dashboard Template
//                     </p>
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

//             <div id='last'>
//                 <br />
//                 <p>2025 <b>Blogs,</b> All rights reserved</p>
//             </div>
//         </div>
//     );
// }

// export default MyBlogs;

// import '../Css/MyBlogs.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function MyBlogs() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchMyBlogs = async () => {
//             setLoading(true);
//             setError('');

//             const token =
//                 localStorage.getItem('token') ||
//                 sessionStorage.getItem('token');

//             if (!token) {
//                 setError('Please login first to see your blogs.');
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(
//                     'http://localhost:3000/api/blog/getMyBlogs',
//                     {
//                         method: 'GET',
//                         headers: {
//                             'Authorization': token
//                         }
//                     }
//                 );

//                 const result = await response.json();

//                 if (!response.ok) {
//                     throw new Error(result.message || 'Blogs load nahi hue.');
//                 }

//                 setBlogs(Array.isArray(result.data) ? result.data : []);
//             } catch (err) {
//                 setError(err.message || 'Backend se connection nahi ho raha.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMyBlogs();
//     }, [location.key]);

//     return (
//         <div className="myblogs-page">
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="blog" />
//                 </nav>

//                 <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to="/MyBlogs" id="pt">My Blogs</Link>
//                 <p id="pth">Contact us</p>

//                 <p id="pf">
//                     <button id="btn" onClick={() => navigate('/login')}>
//                         Sign In
//                     </button>
//                 </p>
//             </div>

//             <main className="myblogs-main">
//                 <div className="myblogs-heading">
//                     <div>
//                         <h1 id="myblogs">My Blogs</h1>
//                         <p className="myblogs-subtitle">
//                             Your stories, ideas and memories in one place.
//                         </p>
//                     </div>

//                     <button
//                         id="addbut"
//                         onClick={() => navigate('/addblog')}
//                     >
//                         + Add Blog
//                     </button>
//                 </div>

//                 {loading && (
//                     <p className="blogs-message">Loading your blogs...</p>
//                 )}

//                 {error && (
//                     <p className="blogs-error">{error}</p>
//                 )}

//                 {!loading && !error && blogs.length === 0 && (
//                     <div className="empty-blogs">
//                         <h2>No blogs yet</h2>
//                         <p>Add your first blog and it will appear here.</p>
//                         <button onClick={() => navigate('/addblog')}>
//                             Create Your First Blog
//                         </button>
//                     </div>
//                 )}

//                 {!loading && !error && blogs.length > 0 && (
//                     <div className="blogs-grid">
//                         {blogs.map((blog) => (
//                             <article className="blog-card" key={blog._id}>
//                                 {blog.image ? (
//                                     <img
//                                         className="blog-card-image"
//                                         src={
//                                             blog.image.startsWith('http')
//                                                 ? blog.image
//                                                 : `http://localhost:3000/${blog.image}`
//                                         }
//                                         alt={blog.title || 'Blog'}
//                                     />
//                                 ) : (
//                                     <div className="blog-card-image blog-image-placeholder">
//                                         <span>My Blog</span>
//                                     </div>
//                                 )}

//                                 <div className="blog-card-content">
//                                     <h2>{blog.title}</h2>

//                                     <p className="blog-card-description">
//                                         {blog.description}
//                                     </p>

//                                     <p className="blog-card-date">
//                                         {blog.createdAt
//                                             ? new Date(blog.createdAt).toLocaleDateString()
//                                             : ''}
//                                     </p>
//                                 </div>
//                             </article>
//                         ))}
//                     </div>
//                 )}
//             </main>

//             <div id="foot123">
//                 <div id="foot1">
//                     <br /><br />
//                     <img src={iconblog} alt="Blogs" />
//                     <br />
//                     <p>
//                         Most developer friendly & highly <br />
//                         customisable Admin Dashboard Template
//                     </p>
//                     <br />
//                     <p><img src={fouricon} alt="Social links" /></p>
//                 </div>

//                 <div id="foot2">
//                     <br /><br />
//                     <p>Company</p><br />
//                     <p>About us</p><br />
//                     <p>Blogs</p>
//                 </div>

//                 <div id="foot3">
//                     <br /><br />
//                     <p>Quick Links</p><br />
//                     <p>Terms of service</p><br />
//                     <p>Policy Privacy</p><br />
//                     <p>Get in touch</p><br />
//                 </div>

//                 <div id="foot4">
//                     <br /><br />
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
//                 <p>2025 <b>Blogs,</b> All rights reserved</p>
//             </div>
//         </div>
//     );
// }

// export default MyBlogs;





// import '../Css/MyBlogs.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function MyBlogs() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     const [profileOpen, setProfileOpen] = useState(false);
//     const [profileName, setProfileName] = useState('');

//     // Login ke baad saved profile name read karo
//     useEffect(() => {
//         const name =
//             localStorage.getItem('profileName') ||
//             sessionStorage.getItem('profileName');

//         setProfileName(name || '');
//     }, [location.key]);

//     // Logout functionality
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('profileName');
//         localStorage.removeItem('userId');

//         sessionStorage.removeItem('token');
//         sessionStorage.removeItem('profileName');
//         sessionStorage.removeItem('userId');

//         setProfileName('');
//         setProfileOpen(false);

//         navigate('/login');
//     };

//     // Apne blogs fetch karo
//     useEffect(() => {
//         const fetchMyBlogs = async () => {
//             setLoading(true);
//             setError('');

//             const token =
//                 localStorage.getItem('token') ||
//                 sessionStorage.getItem('token');

//             if (!token) {
//                 setError('Please login first to see your blogs.');
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(
//                     'http://localhost:3000/api/blog/getMyBlogs',
//                     {
//                         method: 'GET',
//                         headers: {
//                             'Authorization': token
//                         }
//                     }
//                 );

//                 const result = await response.json();

//                 if (!response.ok) {
//                     throw new Error(
//                         result.message || 'Blogs load nahi hue.'
//                     );
//                 }

//                 setBlogs(
//                     Array.isArray(result.data) ? result.data : []
//                 );
//             } catch (err) {
//                 setError(
//                     err.message || 'Backend se connection nahi ho raha.'
//                 );
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMyBlogs();
//     }, [location.key]);

//     return (
//         <div className="myblogs-page">

//             {/* Header */}
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="blog" />
//                 </nav>

//                 {/* <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to="/MyBlogs" id="pt">My Blogs</Link> */}

//                 <Link
//                     to="/AllBlogs"
//                     id="po"
//                     className="header-link active"
//                 >
//                     Home
//                 </Link>

//                 <Link
//                     to="/MyBlogs"
//                     id="pt"
//                     className="header-link"
//                 >
//                     My Blogs
//                 </Link>

//                 <p id="pth">Contact us</p>

//                 {/* Profile Dropdown */}
//                 <div className="profile-area">
//                     {profileName ? (
//                         <div className="profile-dropdown-wrapper">

//                             <button
//                                 className="profile-trigger"
//                                 type="button"
//                                 onClick={() =>
//                                     setProfileOpen(!profileOpen)
//                                 }
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
//                             onClick={() => navigate('/login')}
//                         >
//                             Sign In
//                         </button>
//                     )}
//                 </div>
//             </div>

//             {/* My Blogs Section */}
//             <main className="myblogs-main">
//                 <div className="myblogs-heading">
//                     <div>
//                         <h1 id="myblogs">My Blogs</h1>
//                         <p className="myblogs-subtitle">
//                             Your stories, ideas and memories in one place.
//                         </p>
//                     </div>

//                     <button
//                         id="addbut"
//                         onClick={() => navigate('/addblog')}
//                     >
//                         + Add Blog
//                     </button>
//                 </div>

//                 {loading && (
//                     <p className="blogs-message">
//                         Loading your blogs...
//                     </p>
//                 )}

//                 {error && (
//                     <p className="blogs-error">{error}</p>
//                 )}

//                 {!loading && !error && blogs.length === 0 && (
//                     <div className="empty-blogs">
//                         <h2>No blogs yet</h2>
//                         <p>
//                             Add your first blog and it will appear here.
//                         </p>

//                         <button onClick={() => navigate('/addblog')}>
//                             Create Your First Blog
//                         </button>
//                     </div>
//                 )}

//                 {!loading && !error && blogs.length > 0 && (
//                     <div className="blogs-grid">
//                         {blogs.map((blog) => (
//                             <article
//                                 className="blog-card"
//                                 key={blog._id}
//                             >
//                                 {blog.image ? (
//                                     <img
//                                         className="blog-card-image"
//                                         src={
//                                             blog.image.startsWith('http')
//                                                 ? blog.image
//                                                 : `http://localhost:3000/${blog.image}`
//                                         }
//                                         alt={blog.title || 'Blog'}
//                                     />
//                                 ) : (
//                                     <div className="blog-card-image blog-image-placeholder">
//                                         <span>My Blog</span>
//                                     </div>
//                                 )}

//                                 <div className="blog-card-content">
//                                     <h2>{blog.title}</h2>

//                                     <p className="blog-card-description">
//                                         {blog.description}
//                                     </p>

//                                     <p className="blog-card-date">
//                                         {blog.createdAt
//                                             ? new Date(
//                                                 blog.createdAt
//                                             ).toLocaleDateString()
//                                             : ''}
//                                     </p>
//                                 </div>
//                             </article>
//                         ))}
//                     </div>
//                 )}
//             </main>

//             {/* Footer */}
//             <div id="foot123">
//                 <div id="foot1">
//                     <br /><br />
//                     <img src={iconblog} alt="Blogs" />
//                     <br />
//                     <p>
//                         Most developer friendly & highly <br />
//                         customisable Admin Dashboard Template
//                     </p>
//                     <br />
//                     <p>
//                         <img src={fouricon} alt="Social links" />
//                     </p>
//                 </div>

//                 <div id="foot2">
//                     <br /><br />
//                     <p>Company</p><br />
//                     <p>About us</p><br />
//                     <p>Blogs</p>
//                 </div>

//                 <div id="foot3">
//                     <br /><br />
//                     <p>Quick Links</p><br />
//                     <p>Terms of service</p><br />
//                     <p>Policy Privacy</p><br />
//                     <p>Get in touch</p><br />
//                 </div>

//                 <div id="foot4">
//                     <br /><br />
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
//                 <p>2025 <b>Blogs,</b> All rights reserved</p>
//             </div>

//         </div>
//     );
// }

// export default MyBlogs;

import '../Css/MyBlogs.css';
import iconblog from "../assets/iconblog.png";
import fouricon from "../assets/fouricon.png";
import Group from "../assets/Group.png";
import Groupone from "../assets/Groupone.png";
import Grouptwo from "../assets/Grouptwo.png";
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MyBlogs() {
    const navigate = useNavigate();
    const location = useLocation();

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [profileOpen, setProfileOpen] = useState(false);
    const [profileName, setProfileName] = useState('');

    useEffect(() => {
        const name =
            localStorage.getItem('profileName') ||
            sessionStorage.getItem('profileName');

        setProfileName(name || '');
    }, [location.key]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('profileName');
        localStorage.removeItem('userId');

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('profileName');
        sessionStorage.removeItem('userId');

        setProfileName('');
        setProfileOpen(false);

        navigate('/login');
    };

    useEffect(() => {
        const fetchMyBlogs = async () => {
            setLoading(true);
            setError('');

            const token =
                localStorage.getItem('token') ||
                sessionStorage.getItem('token');

            if (!token) {
                setError('Please login first to see your blogs.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    'http://localhost:3000/api/blog/getMyBlogs',
                    {
                        method: 'GET',
                        headers: {
                            'Authorization': token
                        }
                    }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(
                        result.message || 'Blogs load nahi hue.'
                    );
                }

                setBlogs(
                    Array.isArray(result.data) ? result.data : []
                );
            } catch (err) {
                setError(
                    err.message || 'Backend se connection nahi ho raha.'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchMyBlogs();
    }, [location.key]);

    return (
        <div className="myblogs-page">

            {/* Header */}
            <div id="navcont">
                <nav>
                    <img id="nav" src={iconblog} alt="blog" />
                </nav>

                <NavLink
                    to="/AllBlogs"
                    id="po"
                    end
                    className={({ isActive }) =>
                        isActive ? "header-link active" : "header-link"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/MyBlogs"
                    id="pt"
                    end
                    className={({ isActive }) =>
                        isActive ? "header-link active" : "header-link"
                    }
                >
                    My Blogs
                </NavLink>

                <p id="pth">Contact us</p>

                {/* Profile Dropdown */}
                <div className="profile-area">
                    {profileName ? (
                        <div className="profile-dropdown-wrapper">

                            <button
                                className="profile-trigger"
                                type="button"
                                onClick={() =>
                                    setProfileOpen(!profileOpen)
                                }
                            >
                                <span className="profile-avatar">
                                    {profileName.charAt(0).toUpperCase()}
                                </span>

                                <span className="profile-username">
                                    {profileName}
                                </span>

                                <span>⌄</span>
                            </button>

                            {profileOpen && (
                                <div className="profile-dropdown">

                                    <div className="profile-dropdown-user">
                                        <span className="profile-avatar">
                                            {profileName.charAt(0).toUpperCase()}
                                        </span>

                                        <span>{profileName}</span>
                                    </div>

                                    <Link
                                        to="/myprofile"
                                        className="profile-menu-link"
                                        onClick={() => setProfileOpen(false)}
                                    >
                                        My Profile
                                    </Link>

                                    <button
                                        className="profile-logout"
                                        type="button"
                                        onClick={handleLogout}
                                    >
                                        Logout ↪
                                    </button>

                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            id="btn"
                            type="button"
                            onClick={() => navigate('/login')}
                        >
                            Sign In
                        </button>
                    )}
                </div>
            </div>

            {/* My Blogs Section */}
            <main className="myblogs-main">
                <div className="myblogs-heading">
                    <div>
                        <h1 id="myblogs">My Blogs</h1>
                        <p className="myblogs-subtitle">
                            Your stories, ideas and memories in one place.
                        </p>
                    </div>

                    <button
                        id="addbut"
                        onClick={() => navigate('/addblog')}
                    >
                        + Add Blog
                    </button>
                </div>

                {loading && (
                    <p className="blogs-message">
                        Loading your blogs...
                    </p>
                )}

                {error && (
                    <p className="blogs-error">{error}</p>
                )}

                {!loading && !error && blogs.length === 0 && (
                    <div className="empty-blogs">
                        <h2>No blogs yet</h2>
                        <p>
                            Add your first blog and it will appear here.
                        </p>

                        <button onClick={() => navigate('/addblog')}>
                            Create Your First Blog
                        </button>
                    </div>
                )}

                {!loading && !error && blogs.length > 0 && (
                    <div className="blogs-grid">
                        {blogs.map((blog) => (
                            <article
                                className="blog-card"
                                key={blog._id}
                            >
                                {blog.image ? (
                                    <img
                                        className="blog-card-image"
                                        src={
                                            blog.image.startsWith('http')
                                                ? blog.image
                                                : `http://localhost:3000/${blog.image}`
                                        }
                                        alt={blog.title || 'Blog'}
                                    />
                                ) : (
                                    <div className="blog-card-image blog-image-placeholder">
                                        <span>My Blog</span>
                                    </div>
                                )}

                                <div className="blog-card-content">
                                    <h2>{blog.title}</h2>

                                    <p className="blog-card-description">
                                        {blog.description}
                                    </p>

                                    <p className="blog-card-date">
                                        {blog.createdAt
                                            ? new Date(
                                                blog.createdAt
                                            ).toLocaleDateString()
                                            : ''}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <div id="foot123">
                <div id="foot1">
                    <br /><br />
                    <img src={iconblog} alt="Blogs" />
                    <br />
                    <p>
                        Most developer friendly & highly <br />
                        customisable Admin Dashboard Template
                    </p>
                    <br />
                    <p>
                        <img src={fouricon} alt="Social links" />
                    </p>
                </div>

                <div id="foot2">
                    <br /><br />
                    <p>Company</p><br />
                    <p>About us</p><br />
                    <p>Blogs</p>
                </div>

                <div id="foot3">
                    <br /><br />
                    <p>Quick Links</p><br />
                    <p>Terms of service</p><br />
                    <p>Policy Privacy</p><br />
                    <p>Get in touch</p><br />
                </div>

                <div id="foot4">
                    <br /><br />
                    <p>Contact Us</p>
                    <p>
                        <img src={Group} alt="" />
                        Info@companyname.com
                    </p>
                    <br />
                    <p>
                        <img src={Groupone} alt="" />
                        123456-789
                    </p>
                    <br />
                    <p>
                        <img src={Grouptwo} alt="" />
                        1234 Street Name, State, zip Code
                    </p>
                </div>
            </div>

            <div id="last">
                <br />
                <p>2025 <b>Blogs,</b> All rights reserved</p>
            </div>

        </div>
    );
}

export default MyBlogs;
