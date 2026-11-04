// import '../Css/MyBlogs.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function AllBlogs() {
//     const navigate = useNavigate();

//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchAllBlogs = async () => {
//             try {
//                 setLoading(true);
//                 setError('');

//                 const response = await fetch(
//                     'http://localhost:3000/api/blog/get-all-blogs'
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
//                     err.message === 'Failed to fetch'
//                         ? 'Backend connect nahi ho raha. Server check karo.'
//                         : err.message
//                 );
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAllBlogs();
//     }, []);

//     return (
//         <div className="myblogs-page">

//             {/* Same Header */}
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="Blogs" />
//                 </nav>

//                 <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to ="/MyBlogs" id="pt">My Blogs</Link>
//                 <p id="pth">Contact us</p>

//                 <p id="pf">
//                     <button
//                         id="btn"
//                         onClick={() => navigate('/login')}
//                     >
//                         Sign In
//                     </button>
//                 </p>
//             </div>

//             {/* All Blogs Section */}
//             <main className="myblogs-main">
//                 <div className="myblogs-heading">
//                     <div>
//                         <h1 id="myblogs">All Blogs</h1>
//                         <p className="myblogs-subtitle">
//                             Explore stories and ideas shared by our community.
//                         </p>
//                     </div>
//                 </div>

//                 {loading && (
//                     <p className="blogs-message">Loading all blogs...</p>
//                 )}

//                 {error && (
//                     <p className="blogs-error">{error}</p>
//                 )}

//                 {!loading && !error && blogs.length === 0 && (
//                     <div className="empty-blogs">
//                         <h2>No blogs available</h2>
//                         <p>There are no blogs to show right now.</p>
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
//                                         <span>Blog</span>
//                                     </div>
//                                 )}

//                                 <div className="blog-card-content">
//                                     <h2>{blog.title}</h2>

//                                     <p className="blog-card-description">
//                                         {blog.description}
//                                     </p>

//                                     {blog.userId && (
//                                         <p className="blog-card-date">
//                                             By {blog.userId.username || blog.userId.email || 'User'}
//                                         </p>
//                                     )}

//                                     {blog.createdAt && (
//                                         <p className="blog-card-date">
//                                             {new Date(blog.createdAt).toLocaleDateString()}
//                                         </p>
//                                     )}
//                                 </div>
//                             </article>
//                         ))}
//                     </div>
//                 )}
//             </main>

//             {/* Same Footer */}
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
//                     <p>Company</p>
//                     <br />
//                     <p>About us</p>
//                     <br />
//                     <p>Blogs</p>
//                 </div>

//                 <div id="foot3">
//                     <br /><br />
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

// export default AllBlogs;





// import '../Css/MyBlogs.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function AllBlogs() {
//     const navigate = useNavigate();

//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     const [profileOpen, setProfileOpen] = useState(false);
//     const [profileName, setProfileName] = useState('');

//     // Login user ki profile information read karo
//     useEffect(() => {
//         const name =
//             localStorage.getItem('profileName') ||
//             sessionStorage.getItem('profileName');

//         setProfileName(name || '');
//     }, []);

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

//     // All blogs fetch karo
//     useEffect(() => {
//         const fetchAllBlogs = async () => {
//             try {
//                 setLoading(true);
//                 setError('');

//                 const response = await fetch(
//                     'http://localhost:3000/api/blog/get-all-blogs'
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
//                     err.message === 'Failed to fetch'
//                         ? 'Backend connect nahi ho raha. Server check karo.'
//                         : err.message
//                 );
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAllBlogs();
//     }, []);

//     return (
//         <div className="myblogs-page">

//             {/* Header */}
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="Blogs" />
//                 </nav>

//                 {/* <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to="/MyBlogs" id="pt">My Blogs</Link> */}


//                 <Link to="/AllBlogs" id="po" className="header-link active">
//                     Home
//                 </Link>

//                 <Link to="/MyBlogs" id="pt" className="header-link">
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

//             {/* All Blogs Section */}
//             <main className="myblogs-main">
//                 <div className="myblogs-heading">
//                     <div>
//                         <h1 id="myblogs">All Blogs</h1>
//                         <p className="myblogs-subtitle">
//                             Explore stories and ideas shared by our community.
//                         </p>
//                     </div>
//                 </div>

//                 {loading && (
//                     <p className="blogs-message">
//                         Loading all blogs...
//                     </p>
//                 )}

//                 {error && (
//                     <p className="blogs-error">{error}</p>
//                 )}

//                 {!loading && !error && blogs.length === 0 && (
//                     <div className="empty-blogs">
//                         <h2>No blogs available</h2>
//                         <p>There are no blogs to show right now.</p>
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
//                                         <span>Blog</span>
//                                     </div>
//                                 )}

//                                 <div className="blog-card-content">
//                                     <h2>{blog.title}</h2>

//                                     <p className="blog-card-description">
//                                         {blog.description}
//                                     </p>

//                                     {blog.userId && (
//                                         <p className="blog-card-date">
//                                             By {blog.userId.username || blog.userId.email || 'User'}
//                                         </p>
//                                     )}

//                                     {blog.createdAt && (
//                                         <p className="blog-card-date">
//                                             {new Date(
//                                                 blog.createdAt
//                                             ).toLocaleDateString()}
//                                         </p>
//                                     )}
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
//                     <p>Company</p>
//                     <br />
//                     <p>About us</p>
//                     <br />
//                     <p>Blogs</p>
//                 </div>

//                 <div id="foot3">
//                     <br /><br />
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

// export default AllBlogs;




// import '../Css/MyBlogs.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { NavLink, Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function AllBlogs() {
//     const navigate = useNavigate();

//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     const [profileOpen, setProfileOpen] = useState(false);
//     const [profileName, setProfileName] = useState('');

//     // Login user ki profile information read karo
//     useEffect(() => {
//         const name =
//             localStorage.getItem('profileName') ||
//             sessionStorage.getItem('profileName');

//         setProfileName(name || '');
//     }, []);

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

//     // All blogs fetch karo
//     useEffect(() => {
//         const fetchAllBlogs = async () => {
//             try {
//                 setLoading(true);
//                 setError('');

//                 const response = await fetch(
//                     'http://localhost:3000/api/blog/get-all-blogs'
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
//                     err.message === 'Failed to fetch'
//                         ? 'Backend connect nahi ho raha. Server check karo.'
//                         : err.message
//                 );
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAllBlogs();
//     }, []);

//     return (
//         <div className="myblogs-page">

//             {/* Header */}
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="Blogs" />
//                 </nav>

//                 <NavLink
//                     to="/AllBlogs"
//                     id="po"
//                     end
//                     className={({ isActive }) =>
//                         isActive ? "header-link active" : "header-link"
//                     }
//                 >
//                     Home
//                 </NavLink>

//                 <NavLink
//                     to="/MyBlogs"
//                     id="pt"
//                     end
//                     className={({ isActive }) =>
//                         isActive ? "header-link active" : "header-link"
//                     }
//                 >
//                     My Blogs
//                 </NavLink>

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

//             {/* All Blogs Section */}
//             <main className="myblogs-main">
//                 <div className="myblogs-heading">
//                     <div>
//                         <h1 id="myblogs">All Blogs</h1>
//                         <p className="myblogs-subtitle">
//                             Explore stories and ideas shared by our community.
//                         </p>
//                     </div>
//                 </div>

//                 {loading && (
//                     <p className="blogs-message">
//                         Loading all blogs...
//                     </p>
//                 )}

//                 {error && (
//                     <p className="blogs-error">{error}</p>
//                 )}

//                 {!loading && !error && blogs.length === 0 && (
//                     <div className="empty-blogs">
//                         <h2>No blogs available</h2>
//                         <p>There are no blogs to show right now.</p>
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
//                                         <span>Blog</span>
//                                     </div>
//                                 )}

//                                 <div className="blog-card-content">
//                                     <h2>{blog.title}</h2>

//                                     <p className="blog-card-description">
//                                         {blog.description}
//                                     </p>

//                                     {blog.userId && (
//                                         <p className="blog-card-date">
//                                             By {blog.userId.username || blog.userId.email || 'User'}
//                                         </p>
//                                     )}

//                                     {blog.createdAt && (
//                                         <p className="blog-card-date">
//                                             {new Date(
//                                                 blog.createdAt
//                                             ).toLocaleDateString()}
//                                         </p>
//                                     )}
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
//                     <p>Company</p>
//                     <br />
//                     <p>About us</p>
//                     <br />
//                     <p>Blogs</p>
//                 </div>

//                 <div id="foot3">
//                     <br /><br />
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

// export default AllBlogs;


import '../Css/MyBlogs.css';
import iconblog from "../assets/iconblog.png";
import fouricon from "../assets/fouricon.png";
import Group from "../assets/Group.png";
import Groupone from "../assets/Groupone.png";
import Grouptwo from "../assets/Grouptwo.png";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AllBlogs() {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [profileOpen, setProfileOpen] = useState(false);
    const [profileName, setProfileName] = useState('');

    // Login user ki profile information
    useEffect(() => {
        const name =
            localStorage.getItem('profileName') ||
            sessionStorage.getItem('profileName');

        setProfileName(name || '');
    }, []);

    // Logout functionality
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

    // Edit button click hone par selected blog ka data bhejo
    const handleEditBlog = (blog) => {
        navigate('/editblog', {
            state: {
                blog: blog
            }
        });
    };

    // All blogs fetch karo
    useEffect(() => {
        const fetchAllBlogs = async () => {
            try {
                setLoading(true);
                setError('');

                const response = await fetch(
                    'https://backend-development-u7x2.onrender.com/api/blog/get-all-blogs'
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
                    err.message === 'Failed to fetch'
                        ? 'Backend connect nahi ho raha. Server check karo.'
                        : err.message
                );
            } finally {
                setLoading(false);
            }
        };

        fetchAllBlogs();
    }, []);

    return (
        <div className="myblogs-page">

            {/* Header */}
            <div id="navcont">
                <nav>
                    <img id="nav" src={iconblog} alt="Blogs" />
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

            {/* All Blogs Section */}
            <main className="myblogs-main">

                <div className="myblogs-heading">
                    <div>
                        <h1 id="myblogs">All Blogs</h1>

                        <p className="myblogs-subtitle">
                            Explore stories and ideas shared by our community.
                        </p>
                    </div>
                </div>

                {loading && (
                    <p className="blogs-message">
                        Loading all blogs...
                    </p>
                )}

                {error && (
                    <p className="blogs-error">{error}</p>
                )}

                {!loading && !error && blogs.length === 0 && (
                    <div className="empty-blogs">
                        <h2>No blogs available</h2>
                        <p>There are no blogs to show right now.</p>
                    </div>
                )}

                {!loading && !error && blogs.length > 0 && (
                    <div className="blogs-grid">

                        {blogs.map((blog) => (
                            <article
                                className="blog-card"
                                key={blog._id}
                                style={{ position: 'relative' }}
                            >

                                {/* Edit Blog Button */}
                                <button
                                    type="button"
                                    onClick={() => handleEditBlog(blog)}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        zIndex: 2,
                                        padding: '8px 14px',
                                        backgroundColor: '#d5f2f7',
                                        color: '#131010',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'

                                    }}
                                >
                                    ✏️ Edit Blog
                                </button>

                                {/* Blog Image */}
                                {blog.image ? (
                                    <img
                                        className="blog-card-image"
                                        src={
                                            blog.image.startsWith('http')
                                                ? blog.image
                                                : `https://backend-development-u7x2.onrender.com/${blog.image}`}
                                        alt={blog.title || 'Blog'}
                                    />
                                ) : (
                                    <div className="blog-card-image blog-image-placeholder">
                                        <span>Blog</span>
                                    </div>
                                )}

                                {/* Blog Details */}
                                <div className="blog-card-content">

                                    <h2>{blog.title}</h2>

                                    <p className="blog-card-description">
                                        {blog.description}
                                    </p>

                                    {blog.userId && (
                                        <p className="blog-card-date">
                                            By {
                                                blog.userId.username ||
                                                blog.userId.email ||
                                                'User'
                                            }
                                        </p>
                                    )}

                                    {blog.createdAt && (
                                        <p className="blog-card-date">
                                            {new Date(
                                                blog.createdAt
                                            ).toLocaleDateString()}
                                        </p>
                                    )}

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

                    <p>Company</p>

                    <br />

                    <p>About us</p>

                    <br />

                    <p>Blogs</p>
                </div>

                <div id="foot3">
                    <br /><br />

                    <p>Quick Links</p>

                    <br />

                    <p>Terms of service</p>

                    <br />

                    <p>Policy Privacy</p>

                    <br />

                    <p>Get in touch</p>

                    <br />
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

                <p>
                    2025 <b>Blogs,</b> All rights reserved
                </p>
            </div>

        </div>
    );
}

export default AllBlogs;

