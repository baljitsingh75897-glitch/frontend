// import '../Css/editblog.css';
// import iconblog from "../assets/iconblog.png"
// import fouricon from "../assets/fouricon.png"
// import Group from "../assets/Group.png"
// import Groupone from "../assets/Groupone.png"
// import Grouptwo from "../assets/Grouptwo.png"
// import iconprofile from "../assets/iconprofile.png"
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';


// function EditBlog() {
//     return (
//         <div>
//             <div id='navcont'>
//                 <nav><img id='nav' src={iconblog} alt="blog" /> </nav>
//                 {/* <p id='po'>Home</p>  */}
//                 <Link to="/MyBlogs" id='po'>Home</Link>
//                 <p id='pt'>My Blogs</p>
//                 <p id='pth'>Contact us</p>

//                 <p id='pf'>
//                     <select name="Sign Up" id="">Sign Up

//                         <option><p><img src={iconprofile} alt="" /></p>My Profile</option>

//                     </select>

//                 </p>


//             </div>


//             <div id='mainsec'>
//                 <div id='add'>
//                     <h2 id='addb'>Edit Blog</h2>

//                     <label id='label1' htmlFor="">Title</label><br />
//                     <input id='input1' type="text" placeholder='     Write here' />
//                     <br />
//                     <br />
//                     <label id='label2' htmlFor="">Description</label><br />
//                     <input id='input2' type="text" placeholder='     Write here' />
//                     <br />
//                     <br />
//                     <label id='label3' htmlFor="">Upload image</label><br />
//                     <input id='input3' type="text" placeholder='     Write here' />
//                     <br />
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

// export default EditBlog;


// import '../Css/editblog.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import iconprofile from "../assets/iconprofile.png";
// import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// function EditBlog() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     // AllBlogs se selected blog receive karna
//     const selectedBlog = location.state?.blog;
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(
//         selectedBlog?.image
//             ? (
//                 selectedBlog.image.startsWith('http')
//                     ? selectedBlog.image
//                     : `http://localhost:3000/${selectedBlog.image}`
//             )
//             : ''
//     );

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [profileOpen, setProfileOpen] = useState(false);
//     const [profileName, setProfileName] = useState('My Profile');

//     // User ka naam load karna
//     useEffect(() => {
//         const name =
//             localStorage.getItem('profileName') ||
//             sessionStorage.getItem('profileName') ||
//             localStorage.getItem('username') ||
//             sessionStorage.getItem('username');

//         if (name) {
//             setProfileName(name);
//         }
//     }, []);

//     // Agar EditBlog page par blog select nahi kiya gaya
//     useEffect(() => {
//         if (!selectedBlog?._id) {
//             setError('Please AllBlogs page par jaakar us blog ka Edit Blog button click karein.');
//         }
//     }, [selectedBlog]);

//     // Image select aur preview
//     const handleImageChange = (e) => {
//         const file = e.target.files?.[0];

//         if (!file) return;

//         if (!file.type.startsWith('image/')) {
//             setError('Please select a valid image file.');
//             e.target.value = '';
//             return;
//         }

//         if (file.size > 5 * 1024 * 1024) {
//             setError('Image size 5MB se kam honi chahiye.');
//             e.target.value = '';
//             return;
//         }

//         setError('');
//         setImage(file);
//         setImagePreview(URL.createObjectURL(file));
//     };

//     // Logout
//     const handleLogout = () => {
//         [
//             'token',
//             'profileName',
//             'username',
//             'userId',
//             'email'
//         ].forEach((key) => {
//             localStorage.removeItem(key);
//             sessionStorage.removeItem(key);
//         });

//         navigate('/login');
//     };

//     // Blog update karna
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         setError('');
//         setSuccess('');

//         if (!selectedBlog?._id) {
//             setError('Blog select nahi hua. Please AllBlogs par jaakar Edit Blog click karein.');
//             return;
//         }

//         if (!title.trim() || !description.trim()) {
//             setError('Please title aur description dono fill karein.');
//             return;
//         }

//         const token =
//             localStorage.getItem('token') ||
//             sessionStorage.getItem('token');

//         if (!token) {
//             setError('Login session nahi mila. Please dobara login karein.');
//             return;
//         }

//         setLoading(true);

//         try {
//             let response;

//             if (image) {
//                 // Nayi image select ki hai: FormData bhejna
//                 const formData = new FormData();

//                 formData.append('title', title.trim());
//                 formData.append('description', description.trim());
//                 formData.append('image', image);

//                 response = await fetch(
//                     `http://localhost:3000/api/blog/edit-blog/${selectedBlog._id}`,
//                     {
//                         method: 'PUT',
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         },
//                         body: formData
//                     }
//                 );
//             } else {
//                 // Nayi image select nahi ki: sirf text update karna
//                 response = await fetch(
//                     `http://localhost:3000/api/blog/edit-blog/${selectedBlog._id}`,
//                     {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             Authorization: `Bearer ${token}`
//                         },
//                         body: JSON.stringify({
//                             title: title.trim(),
//                             description: description.trim()
//                         })
//                     }
//                 );
//             }

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(result.message || 'Blog update nahi ho paya.');
//             }

//             setSuccess('Blog successfully update ho gaya!');

//             // AllBlogs par wapas jaana
//             setTimeout(() => {
//                 navigate('/AllBlogs', {
//                     replace: true,
//                     state: { refresh: true }
//                 });
//             }, 700);

//         } catch (err) {
//             setError(err.message || 'Something went wrong. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             {/* HEADER */}
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="Blog" />
//                 </nav>

//                 <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to="/MyBlogs" id="pt">My Blogs</Link>
//                 <p id="pth">Contact us</p>

//                 {/* Profile dropdown */}
//                 <div id='diiivvv'
//                     style={{
//                         // marginLeft: 'auto',
//                         marginRight: '5px',
//                         position: 'relative'
//                     }}
//                 >
//                     <button
//                         type="button"
//                         onClick={() => setProfileOpen(!profileOpen)}
//                         style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '8px',
//                             padding: '9px 12px',
//                             border: '1px solid #e5e5e5',
//                             borderRadius: '8px',
//                             background: '#ffffff',
//                             cursor: 'pointer',
//                             color: '#333333'
//                         }}
//                     >
//                         <img
//                             src={iconprofile}
//                             alt="Profile"
//                             style={{
//                                 width: '25px',
//                                 height: '25px',
//                                 objectFit: 'contain'
//                             }}
//                         />

//                         <span>{profileName}</span>
//                         <span>{profileOpen ? '▲' : '▼'}</span>
//                     </button>

//                     {profileOpen && (
//                         <div
//                             style={{
//                                 position: 'absolute',
//                                 top: '100%',
//                                 right: 0,
//                                 marginTop: '8px',
//                                 width: '170px',
//                                 background: '#ffffff',
//                                 border: '1px solid #eeeeee',
//                                 borderRadius: '8px',
//                                 boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
//                                 zIndex: 1000,
//                                 overflow: 'hidden'
//                             }}
//                         >
//                             <Link
//                                 to="/myprofile"
//                                 onClick={() => setProfileOpen(false)}
//                                 style={{
//                                     display: 'block',
//                                     padding: '12px 15px',
//                                     textDecoration: 'none',
//                                     color: '#333333'
//                                 }}
//                             >
//                                 My Profile
//                             </Link>

//                             <button
//                                 type="button"
//                                 onClick={handleLogout}
//                                 style={{
//                                     display: 'block',
//                                     width: '100%',
//                                     padding: '12px 15px',
//                                     textAlign: 'left',
//                                     border: 'none',
//                                     borderTop: '1px solid #eeeeee',
//                                     background: '#ffffff',
//                                     color: '#333333',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* EDIT BLOG FORM */}
//             <div id="mainsec">
//                 <div id="add">
//                     <h2 id="addb">Edit Blog</h2>

//                     <form onSubmit={handleSubmit}>
//                         <label id="label1" htmlFor="input1">
//                             Title
//                         </label>
//                         <br />

//                         <input
//                             id="input1"
//                             type="text"
//                             placeholder="Write here"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <label id="label2" htmlFor="input2">
//                             Description
//                         </label>
//                         <br />

//                         <textarea
//                             id="input2"
//                             placeholder="Write here"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             required
//                             style={{
//                                 textAlign: 'left',
//                                 verticalAlign: 'top',
//                                 padding: '12px',
//                                 boxSizing: 'border-box',
//                                 resize: 'vertical'
//                             }}
//                         />

//                         <br />
//                         <br />

//                         <label id="label3" htmlFor="input3">
//                             Upload image
//                         </label>
//                         <br />

//                         <input
//                             id="input3"
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             style={{
//                                 padding: '10px',
//                                 border: '1px solid #cccccc',
//                                 borderRadius: '6px',
//                                 width: '100%',
//                                 maxWidth: '100%',
//                                 boxSizing: 'border-box',
//                                 background: '#ffffff'
//                             }}
//                         />

//                         {/* {imagePreview && (
//                             <div style={{ marginTop: '15px' }}>
//                                 <p style={{ marginBottom: '8px' }}>
//                                     Image Preview:
//                                 </p>

//                                 <img
//                                     src={imagePreview}
//                                     alt="Selected blog"
//                                     style={{
//                                         width: '180px',
//                                         height: '130px',
//                                         objectFit: 'cover',
//                                         borderRadius: '8px',
//                                         border: '1px solid #dddddd'
//                                     }}
//                                 />
//                             </div>
//                         )} */}

//                         <br />

//                         {error && (
//                             <p style={{ color: 'red', margin: '10px 0' }}>
//                                 {error}
//                             </p>
//                         )}

//                         {success && (
//                             <p style={{ color: 'green', margin: '10px 0' }}>
//                                 {success}
//                             </p>
//                         )}

//                         <div id="btnn">
//                             <button
//                                 id="btn1"
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Updating...' : 'Submit'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             {/* FOOTER */}
//             <div id="foot">
//                 <footer></footer>

//                 <div id="foot1">
//                     <br />
//                     <br />
//                     <img src={iconblog} alt="Blog" />
//                     <br />
//                     <p>
//                         Most developer friendly & highly <br />
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
//                         <img src={Group} alt="" /> Info@companyname.com
//                     </p>
//                     <br />
//                     <p>
//                         <img src={Groupone} alt="" />123456-789
//                     </p>
//                     <br />
//                     <p>
//                         <img src={Grouptwo} alt="" />1234 Street Name, State, zip Code
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

// export default EditBlog;



import '../Css/editblog.css';
import '../Css/MyBlogs.css';

import iconblog from "../assets/iconblog.png";
import fouricon from "../assets/fouricon.png";
import Group from "../assets/Group.png";
import Groupone from "../assets/Groupone.png";
import Grouptwo from "../assets/Grouptwo.png";

import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';

function EditBlog() {
    const navigate = useNavigate();
    const location = useLocation();

    // AllBlogs se selected blog receive karna
    const selectedBlog = location.state?.blog;

    const [title, setTitle] = useState(selectedBlog?.title || '');
    const [description, setDescription] = useState(
        selectedBlog?.description || ''
    );
    const [image, setImage] = useState(null);

    const [imagePreview, setImagePreview] = useState(
        selectedBlog?.image
            ? (
                selectedBlog.image.startsWith('http')
                    ? selectedBlog.image
                    : `http://localhost:3000/${selectedBlog.image}`
            )
            : ''
    );

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [profileOpen, setProfileOpen] = useState(false);
    const [profileName, setProfileName] = useState('');

    // Login user ka naam load karna
    useEffect(() => {
        const name =
            localStorage.getItem('profileName') ||
            sessionStorage.getItem('profileName') ||
            localStorage.getItem('username') ||
            sessionStorage.getItem('username');

        setProfileName(name || '');
    }, []);

    // Selected blog change hone par form update karna
    useEffect(() => {
        if (selectedBlog) {
            setTitle(selectedBlog.title || '');
            setDescription(selectedBlog.description || '');

            setImagePreview(
                selectedBlog.image
                    ? (
                        selectedBlog.image.startsWith('http')
                            ? selectedBlog.image
                            : `http://localhost:3000/${selectedBlog.image}`
                    )
                    : ''
            );
        } else {
            setError(
                'Please AllBlogs page par jaakar us blog ka Edit Blog button click karein.'
            );
        }
    }, [selectedBlog]);

    // Image select aur preview
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setError('Please select a valid image file.');
            e.target.value = '';
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError('Image size 5MB se kam honi chahiye.');
            e.target.value = '';
            return;
        }

        setError('');
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    // Logout
    const handleLogout = () => {
        [
            'token',
            'profileName',
            'username',
            'userId',
            'email'
        ].forEach((key) => {
            localStorage.removeItem(key);
            sessionStorage.removeItem(key);
        });

        setProfileName('');
        setProfileOpen(false);

        navigate('/login');
    };

    // Blog update karna
    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        if (!selectedBlog?._id) {
            setError(
                'Blog select nahi hua. Please AllBlogs par jaakar Edit Blog click karein.'
            );
            return;
        }

        if (!title.trim() || !description.trim()) {
            setError('Please title aur description dono fill karein.');
            return;
        }

        const token =
            localStorage.getItem('token') ||
            sessionStorage.getItem('token');

        if (!token) {
            setError(
                'Login session nahi mila. Please dobara login karein.'
            );
            return;
        }

        setLoading(true);

        try {
            let response;

            if (image) {
                // Nayi image ke saath update
                const formData = new FormData();

                formData.append('title', title.trim());
                formData.append('description', description.trim());
                formData.append('image', image);

                response = await fetch(
                    `http://localhost:3000/api/blog/edit-blog/${selectedBlog._id}`,
                    {
                        method: 'PUT',
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                        body: formData
                    }
                );
            } else {
                // Sirf title aur description update
                response = await fetch(
                    `http://localhost:3000/api/blog/edit-blog/${selectedBlog._id}`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            title: title.trim(),
                            description: description.trim()
                        })
                    }
                );
            }

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || 'Blog update nahi ho paya.'
                );
            }

            setSuccess('Blog successfully update ho gaya!');

            setTimeout(() => {
                navigate('/AllBlogs', {
                    replace: true,
                    state: { refresh: true }
                });
            }, 700);

        } catch (err) {
            setError(
                err.message || 'Something went wrong. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="myblogs-page">

            {/* HEADER */}
            <div id="navcont">
                <nav>
                    <img id="nav" src={iconblog} alt="Blog" />
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

                {/* Profile Dropdown — AllBlogs jaisi styling */}
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
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
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

            {/* EDIT BLOG FORM */}
            <div id="mainsec">
                <div id="add">
                    <h2 id="addb">Edit Blog</h2>

                    <form onSubmit={handleSubmit}>
                        <label id="label1" htmlFor="input1">
                            Title
                        </label>
                        <br />

                        <input
                            id="input1"
                            type="text"
                            placeholder="Write here"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />

                        <br />
                        <br />

                        <label id="label2" htmlFor="input2">
                            Description
                        </label>
                        <br />

                        <textarea
                            id="input2"
                            placeholder="Write here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            style={{
                                textAlign: 'left',
                                verticalAlign: 'top',
                                padding: '12px',
                                boxSizing: 'border-box',
                                resize: 'vertical'
                            }}
                        />

                        <br />
                        <br />

                        <label id="label3" htmlFor="input3">
                            Upload image
                        </label>
                        <br />

                        <input
                            id="input3"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{
                                padding: '10px',
                                border: '1px solid #cccccc',
                                borderRadius: '6px',
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box',
                                background: '#ffffff'
                            }}
                        />

                        {imagePreview && (
                            <div style={{ marginTop: '15px' }}>
                                <p style={{ marginBottom: '8px' }}>
                                    Image Preview:
                                </p>

                                <img
                                    src={imagePreview}
                                    alt="Selected blog"
                                    style={{
                                        width: '180px',
                                        height: '130px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        border: '1px solid #dddddd'
                                    }}
                                />
                            </div>
                        )}

                        <br />

                        {error && (
                            <p style={{ color: 'red', margin: '10px 0' }}>
                                {error}
                            </p>
                        )}

                        {success && (
                            <p style={{ color: 'green', margin: '10px 0' }}>
                                {success}
                            </p>
                        )}

                        <div id="btnn">
                            <button
                                id="btn1"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Updating...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* FOOTER */}
            <div id="foot">
                <footer></footer>

                <div id="foot1">
                    <br />
                    <br />
                    <img src={iconblog} alt="Blog" />
                    <br />

                    <p>
                        Most developer friendly & highly <br />
                        customisable Admin Dashboard Template
                    </p>

                    <br />

                    <p>
                        <img src={fouricon} alt="Social media icons" />
                    </p>
                </div>

                <div id="foot2">
                    <br />
                    <br />
                    <p>Company</p>
                    <br />
                    <p>About us</p>
                    <br />
                    <p>Blogs</p>
                </div>

                <div id="foot3">
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

                <div id="foot4">
                    <br />
                    <br />
                    <p>Contact Us</p>

                    <p>
                        <img src={Group} alt="" /> Info@companyname.com
                    </p>

                    <br />

                    <p>
                        <img src={Groupone} alt="" />123456-789
                    </p>

                    <br />

                    <p>
                        <img src={Grouptwo} alt="" />1234 Street Name, State, zip Code
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

export default EditBlog;