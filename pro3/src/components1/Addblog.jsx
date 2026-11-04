// import '../Css/Addblog.css';
// import iconblog from "../assets/iconblog.png"
// import fouricon from "../assets/fouricon.png"
// import Group from "../assets/Group.png"
// import Groupone from "../assets/Groupone.png"
// import Grouptwo from "../assets/Grouptwo.png"
// import iconprofile from "../assets/iconprofile.png"
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// function  AddBlog(){
//     return(
//          <div>
//             <div id='navcont'>
//             <nav><img id='nav' src={iconblog} alt="blog" /> </nav>
//                 <p id='po'>Home</p> 
//                 <p id='pt'>My Blogs</p>
//                 <p id='pth'>Contact us</p>

//                 <p id='pf'>
//                      <select name="Sign Up" id="">Sign Up

//                     <option><p><img src={iconprofile} alt="" /></p>My Profile</option>

//                     </select>

//                     </p>


//             </div>


//                     <div id='mainsec'>
//                         <div id='add'>
//                             <h2 id='addb'>Add Blog</h2>

//                             <label id='label1' htmlFor="">Title</label><br />
//                             <input id='input1' type="text" placeholder='     Write here' />
//                             <br />
//                             <br />
//                             <label id='label2' htmlFor="">Description</label><br />
//                             <input id='input2' type="text" placeholder='     Write here' />
//                             <br />
//                             <br />
//                             <label id='label3' htmlFor="">Upload image</label><br />
//                             <input id='input3' type="text" placeholder='     ' />
//                             <br />
//                             <br />
//                             <br />
//                             <div id='btnn'>
//                                 <button id='btn1'>Submit</button>
//                             </div>


//                         </div>
//                     </div>




//             <div id='foot'>
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
//     );
//  }

//  export default AddBlog;



// 



// import '../Css/Addblog.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// function AddBlog() {
//     const navigate = useNavigate();

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleImageChange = (e) => {
//         const selectedImage = e.target.files[0];

//         if (selectedImage) {
//             setImage(selectedImage);
//             setImagePreview(URL.createObjectURL(selectedImage));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         const token =
//             localStorage.getItem('token') ||
//             sessionStorage.getItem('token');

//         if (!token) {
//             setError('Please login first. Login karke dobara try karo.');
//             return;
//         }

//         try {
//             setLoading(true);

//             const response = await fetch(
//                 'http://localhost:3000/api/blog/add-Blog',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`
//                     },
//                     body: JSON.stringify({
//                         title,
//                         description
//                     })
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     result.message || 'Blog submit nahi hua.'
//                 );
//             }

//             // Blog successfully save hone ke baad My Blogs page
//             navigate('/MyBlogs');

//         } catch (err) {
//             setError(
//                 err.message || 'Backend se connection nahi ho raha.'
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

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
//                     <select name="Sign Up" id="">
//                         <option>My Profile</option>
//                     </select>
//                 </p>
//             </div>

//             <div id='mainsec'>
//                 <div id='add'>
//                     <h2 id='addb'>Add Blog</h2>

//                     <form onSubmit={handleSubmit}>
//                         <label id='label1' htmlFor="input1">
//                             Title
//                         </label>
//                         <br />

//                         <input
//                             id='input1'
//                             type="text"
//                             placeholder='Write here'
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <label id='label2' htmlFor="input2">
//                             Description
//                         </label>
//                         <br />

//                         <textarea
//                             id='input2'
//                             placeholder='Write here'
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <label id='label3' htmlFor="input3">
//                             Upload image
//                         </label>
//                         <br />

//                         <input
//                             id='input3'
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             required
//                         />

//                         {imagePreview && (
//                             <div>
//                                 <p>Image Preview:</p>
//                                 <img
//                                     src={imagePreview}
//                                     alt="Selected preview"
//                                     style={{
//                                         width: '200px',
//                                         height: '150px',
//                                         objectFit: 'cover',
//                                         marginTop: '10px',
//                                         borderRadius: '10px'
//                                     }}
//                                 />
//                             </div>
//                         )}

//                         <br />
//                         <br />

//                         {error && (
//                             <p style={{ color: 'red' }}>{error}</p>
//                         )}

//                         <div id='btnn'>
//                             <button
//                                 id='btn1'
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Submitting...' : 'Submit'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div id='foot'>
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

// export default AddBlog;












// import '../Css/Addblog.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// function AddBlog() {
//     const navigate = useNavigate();

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleImageChange = (e) => {
//         const selectedImage = e.target.files[0];

//         if (selectedImage) {
//             setImage(selectedImage);
//             setImagePreview(URL.createObjectURL(selectedImage));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         const token =
//             localStorage.getItem('token') ||
//             sessionStorage.getItem('token');

//         if (!token) {
//             setError('Please login first. Login karke dobara try karo.');
//             return;
//         }

//         if (!title.trim() || !description.trim()) {
//             setError('Title aur description dono fill karo.');
//             return;
//         }

//         try {
//             setLoading(true);

//             const response = await fetch(
//                 'http://localhost:3000/api/blog/add-Blog',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': token
//                     },
//                     body: JSON.stringify({
//                         title: title.trim(),
//                         description: description.trim()
//                     })
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     result.message || 'Blog submit nahi hua.'
//                 );
//             }

//             // Blog save hone ke baad My Blogs page par jao.
//             navigate('/MyBlogs');

//         } catch (err) {
//             setError(
//                 err.message === 'Failed to fetch'
//                     ? 'Backend connect nahi ho raha. Check karo port 3000 par server chal raha hai.'
//                     : err.message
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <div id='navcont'>
//                 <nav>
//                     <img id='nav' src={iconblog} alt="blog" />
//                 </nav>

//                 {/* <Link to="/MyBlogs" id='po'>Home</Link>
//                 <p id='pt'>My Blogs</p> */}
//                 <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to="/MyBlogs" id="pt">My Blogs</Link>
//                 <p id='pth'>Contact us</p>

//                 <p id='pf'>
//                     <select name="Sign Up" id="">
//                         <option>My Profile</option>
//                     </select>
//                 </p>
//             </div>

//             <div id='mainsec'>
//                 <div id='add'>
//                     <h2 id='addb'>Add Blog</h2>

//                     <form onSubmit={handleSubmit}>
//                         <label id='label1' htmlFor="input1">
//                             Title
//                         </label>
//                         <br />

//                         <input
//                             id='input1'
//                             type="text"
//                             placeholder='Write here'
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <label id='label2' htmlFor="input2">
//                             Description
//                         </label>
//                         <br />

//                         <textarea
//                             id='input2'
//                             placeholder='Write here'
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <label id='label3' htmlFor="input3">
//                             Upload image
//                         </label>
//                         <br />

//                         <input
//                             id='input3'
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             required
//                         />

//                         {imagePreview && (
//                             <div>
//                                 <p>Image Preview:</p>
//                                 <img
//                                     src={imagePreview}
//                                     alt="Selected preview"
//                                     style={{
//                                         width: '200px',
//                                         height: '150px',
//                                         objectFit: 'cover',
//                                         marginTop: '10px',
//                                         borderRadius: '10px'
//                                     }}
//                                 />
//                             </div>
//                         )}

//                         <br />
//                         <br />

//                         {error && (
//                             <p style={{ color: 'red' }}>{error}</p>
//                         )}

//                         <div id='btnn'>
//                             <button
//                                 id='btn1'
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Submitting...' : 'Submit'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div id='foot'>
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

// export default AddBlog;





// import '../Css/Addblog.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// function AddBlog() {
//     const navigate = useNavigate();

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleImageChange = (e) => {
//         const selectedImage = e.target.files[0];

//         if (selectedImage) {
//             // Sirf image files allow karo
//             if (!selectedImage.type.startsWith('image/')) {
//                 setError('Please sirf image file select karo.');
//                 setImage(null);
//                 setImagePreview('');
//                 e.target.value = '';
//                 return;
//             }

//             // Backend Multer limit 5 MB hai
//             if (selectedImage.size > 5 * 1024 * 1024) {
//                 setError('Image ka size 5 MB se kam hona chahiye.');
//                 setImage(null);
//                 setImagePreview('');
//                 e.target.value = '';
//                 return;
//             }

//             setError('');
//             setImage(selectedImage);
//             setImagePreview(URL.createObjectURL(selectedImage));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         const token =
//             localStorage.getItem('token') ||
//             sessionStorage.getItem('token');

//         if (!token) {
//             setError('Please login first. Login karke dobara try karo.');
//             return;
//         }

//         if (!title.trim() || !description.trim()) {
//             setError('Title aur description dono fill karo.');
//             return;
//         }

//         if (!image) {
//             setError('Please image select karo.');
//             return;
//         }

//         try {
//             setLoading(true);

//             // Title, description aur image ko ek saath bhejo
//             const formData = new FormData();
//             formData.append('title', title.trim());
//             formData.append('description', description.trim());
//             formData.append('image', image);

//             const response = await fetch(
//                 'http://localhost:3000/api/blog/add-Blog',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': token
//                     },
//                     body: formData
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     result.message || 'Blog submit nahi hua.'
//                 );
//             }

//             // Blog save hone ke baad My Blogs page par jao
//             navigate('/MyBlogs');

//         } catch (err) {
//             setError(
//                 err.message === 'Failed to fetch'
//                     ? 'Backend connect nahi ho raha. Check karo port 3000 par server chal raha hai.'
//                     : err.message
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <div id='navcont'>
//                 <nav>
//                     <img id='nav' src={iconblog} alt="blog" />
//                 </nav>

//                 <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to="/MyBlogs" id="pt">My Blogs</Link>
//                 <p id='pth'>Contact us</p>

//                 <p id='pf'>
//                     <select name="Sign Up" id="">
//                         <option>My Profile</option>
//                     </select>
//                 </p>
//             </div>

//             <div id='mainsec'>
//                 <div id='add'>
//                     <h2 id='addb'>Add Blog</h2>

//                     <form onSubmit={handleSubmit}>
//                         <label id='label1' htmlFor="input1">
//                             Title
//                         </label>
//                         <br />

//                         <input
//                             id='input1'
//                             type="text"
//                             placeholder='Write here'
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <label id='label2' htmlFor="input2">
//                             Description
//                         </label>
//                         <br />

//                         <textarea
//                             id='input2'
//                             placeholder='Write here'
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <label id='label3' htmlFor="input3">
//                             Upload image
//                         </label>
//                         <br />

//                         <input
//                             id='input3'
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             required
//                         />
// {/* 
//                         {imagePreview && (
//                             <div className="image-preview-container">
//                                 <p>Image Preview:</p>
//                                 <img
//                                     src={imagePreview}
//                                     alt="Selected preview"
//                                     className="image-preview"
//                                 />
//                             </div>
//                         )} */}

//                         <br />
//                         <br />

//                         {error && (
//                             <p style={{ color: 'red' }}>{error}</p>
//                         )}

//                         <div id='btnn'>
//                             <button
//                                 id='btn1'
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Submitting...' : 'Submit'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div id='foot'>
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

// export default AddBlog;







// import '../Css/Addblog.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import '../Css/MyBlogs.css';

// function AddBlog() {
//     const navigate = useNavigate();

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleImageChange = (e) => {
//         const selectedImage = e.target.files[0];

//         if (selectedImage) {
//             if (!selectedImage.type.startsWith('image/')) {
//                 setError('Please sirf image file select karo.');
//                 setImage(null);
//                 setImagePreview('');
//                 e.target.value = '';
//                 return;
//             }

//             if (selectedImage.size > 5 * 1024 * 1024) {
//                 setError('Image ka size 5 MB se kam hona chahiye.');
//                 setImage(null);
//                 setImagePreview('');
//                 e.target.value = '';
//                 return;
//             }

//             setError('');
//             setImage(selectedImage);
//             setImagePreview(URL.createObjectURL(selectedImage));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         const token =
//             localStorage.getItem('token') ||
//             sessionStorage.getItem('token');

//         if (!token) {
//             setError('Please login first. Login karke dobara try karo.');
//             return;
//         }

//         if (!title.trim() || !description.trim()) {
//             setError('Title aur description dono fill karo.');
//             return;
//         }

//         if (!image) {
//             setError('Please image select karo.');
//             return;
//         }

//         try {
//             setLoading(true);

//             const formData = new FormData();
//             formData.append('title', title.trim());
//             formData.append('description', description.trim());
//             formData.append('image', image);

//             const response = await fetch(
//                 'http://localhost:3000/api/blog/add-Blog',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': token
//                     },
//                     body: formData
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     result.message || 'Blog submit nahi hua.'
//                 );
//             }

//             navigate('/MyBlogs');

//         } catch (err) {
//             setError(
//                 err.message === 'Failed to fetch'
//                     ? 'Backend connect nahi ho raha. Check karo port 3000 par server chal raha hai.'
//                     : err.message
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="blog" />
//                 </nav>

//                 <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to="/MyBlogs" id="pt">My Blogs</Link>
//                 <p id="pth">Contact us</p>

//                 <p id="pf">
//                     <Link
//                         to="/myprofile"
//                         style={{
//                             textDecoration: 'none',
//                             color: 'inherit'
//                         }}
//                     >
//                         My Profile
//                     </Link>
//                 </p>
//             </div>

//             <div id="mainsec">
//                 <div id="add">
//                     <h2 id="addb">Add Blog</h2>

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
//                             required
//                         />

//                         {/*
//                         {imagePreview && (
//                             <div className="image-preview-container">
//                                 <p>Image Preview:</p>
//                                 <img
//                                     src={imagePreview}
//                                     alt="Selected preview"
//                                     className="image-preview"
//                                 />
//                             </div>
//                         )}
//                         */}

//                         <br />
//                         <br />

//                         {error && (
//                             <p style={{ color: 'red' }}>{error}</p>
//                         )}

//                         <div id="btnn">
//                             <button
//                                 id="btn1"
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Submitting...' : 'Submit'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div id="foot">
//                 <footer></footer>

//                 <div id="foot1">
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
//                 <p>2025 <b>Blogs,</b> All rights reserved</p>
//             </div>
//         </div>
//     );
// }

// export default AddBlog;





// import '../Css/Addblog.css';
// import iconblog from "../assets/iconblog.png";
// import fouricon from "../assets/fouricon.png";
// import Group from "../assets/Group.png";
// import Groupone from "../assets/Groupone.png";
// import Grouptwo from "../assets/Grouptwo.png";
// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// function AddBlog() {
//     const navigate = useNavigate();

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const [profileOpen, setProfileOpen] = useState(false);
//     const [profileName, setProfileName] = useState('');

//     useEffect(() => {
//         const savedName =
//             localStorage.getItem('username') ||
//             sessionStorage.getItem('username') ||
//             localStorage.getItem('profileName') ||
//             sessionStorage.getItem('profileName');

//         if (savedName) {
//             setProfileName(savedName);
//         }
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('username');
//         localStorage.removeItem('profileName');

//         sessionStorage.removeItem('token');
//         sessionStorage.removeItem('username');
//         sessionStorage.removeItem('profileName');

//         setProfileOpen(false);
//         navigate('/login');
//     };

//     const handleImageChange = (e) => {
//         const selectedImage = e.target.files[0];

//         if (selectedImage) {
//             if (!selectedImage.type.startsWith('image/')) {
//                 setError('Please sirf image file select karo.');
//                 setImage(null);
//                 setImagePreview('');
//                 e.target.value = '';
//                 return;
//             }

//             if (selectedImage.size > 5 * 1024 * 1024) {
//                 setError('Image ka size 5 MB se kam hona chahiye.');
//                 setImage(null);
//                 setImagePreview('');
//                 e.target.value = '';
//                 return;
//             }

//             setError('');
//             setImage(selectedImage);
//             setImagePreview(URL.createObjectURL(selectedImage));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         const token =
//             localStorage.getItem('token') ||
//             sessionStorage.getItem('token');

//         if (!token) {
//             setError('Please login first. Login karke dobara try karo.');
//             return;
//         }

//         if (!title.trim() || !description.trim()) {
//             setError('Title aur description dono fill karo.');
//             return;
//         }

//         if (!image) {
//             setError('Please image select karo.');
//             return;
//         }

//         try {
//             setLoading(true);

//             const formData = new FormData();
//             formData.append('title', title.trim());
//             formData.append('description', description.trim());
//             formData.append('image', image);

//             const response = await fetch(
//                 'http://localhost:3000/api/blog/add-Blog',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': token
//                     },
//                     body: formData
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     result.message || 'Blog submit nahi hua.'
//                 );
//             }

//             navigate('/MyBlogs');

//         } catch (err) {
//             setError(
//                 err.message === 'Failed to fetch'
//                     ? 'Backend connect nahi ho raha. Check karo port 3000 par server chal raha hai.'
//                     : err.message
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <div id="navcont">
//                 <nav>
//                     <img id="nav" src={iconblog} alt="blog" />
//                 </nav>

//                 <Link to="/AllBlogs" id="po">Home</Link>
//                 <Link to="/MyBlogs" id="pt">My Blogs</Link>
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

//             <div id="mainsec">
//                 <div id="add">
//                     <h2 id="addb">Add Blog</h2>

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
//                             required
//                         />

//                         {/*
//                         {imagePreview && (
//                             <div className="image-preview-container">
//                                 <p>Image Preview:</p>
//                                 <img
//                                     src={imagePreview}
//                                     alt="Selected preview"
//                                     className="image-preview"
//                                 />
//                             </div>
//                         )}
//                         */}

//                         <br />
//                         <br />

//                         {error && (
//                             <p style={{ color: 'red' }}>{error}</p>
//                         )}

//                         <div id="btnn">
//                             <button
//                                 id="btn1"
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Submitting...' : 'Submit'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div id="foot">
//                 <footer></footer>

//                 <div id="foot1">
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
//                 <p>2025 <b>Blogs,</b> All rights reserved</p>
//             </div>
//         </div>
//     );
// }

// export default AddBlog;




import '../Css/Addblog.css';
import iconblog from "../assets/iconblog.png";
import fouricon from "../assets/fouricon.png";
import Group from "../assets/Group.png";
import Groupone from "../assets/Groupone.png";
import Grouptwo from "../assets/Grouptwo.png";

import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AddBlog() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [profileOpen, setProfileOpen] = useState(false);
    const [profileName, setProfileName] = useState('');

    useEffect(() => {
        const savedName =
            localStorage.getItem('username') ||
            sessionStorage.getItem('username') ||
            localStorage.getItem('profileName') ||
            sessionStorage.getItem('profileName');

        if (savedName) {
            setProfileName(savedName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('profileName');

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('profileName');

        setProfileOpen(false);
        navigate('/login');
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (!selectedImage) return;

        if (!selectedImage.type.startsWith('image/')) {
            setError('Please select a valid image file.');
            setImage(null);
            setImagePreview('');
            e.target.value = '';
            return;
        }

        if (selectedImage.size > 5 * 1024 * 1024) {
            setError('Image size must be less than 5 MB.');
            setImage(null);
            setImagePreview('');
            e.target.value = '';
            return;
        }

        setError('');
        setImage(selectedImage);
        setImagePreview(URL.createObjectURL(selectedImage));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const token =
            localStorage.getItem('token') ||
            sessionStorage.getItem('token');

        if (!token) {
            setError('Please login first, then try again.');
            return;
        }

        if (!title.trim() || !description.trim()) {
            setError('Please enter both title and description.');
            return;
        }

        if (!image) {
            setError('Please select an image for your blog.');
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append('title', title.trim());
            formData.append('description', description.trim());
            formData.append('image', image);

            const response = await fetch(
                'https://backend-development-u7x2.onrender.com/api/blog/add-Blog',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    body: formData
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || 'Blog could not be submitted.'
                );
            }

            navigate('/MyBlogs');

        } catch (err) {
            setError(
                err.message === 'Failed to fetch'
                    ? 'Backend connect nahi ho raha. Check karo port 3000 par server chal raha hai.'
                    : err.message
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="addblog-page">

            {/* Header */}
            <div id="navcont">
                <nav>
                    <img id="nav" src={iconblog} alt="Blogs" />
                </nav>

                <Link to="/AllBlogs" id="po">Home</Link>
                <Link to="/MyBlogs" id="pt">My Blogs</Link>
                <p id="pth">Contact us</p>

                <div className="profile-area">
                    {profileName ? (
                        <div className="profile-dropdown-wrapper">
                            <button
                                className="profile-trigger"
                                type="button"
                                onClick={() => setProfileOpen(!profileOpen)}
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

            {/* Main Add Blog Form */}
            <main className="addblog-main">
                <section className="addblog-card">

                    <h2 className="addblog-heading">Add Blog</h2>

                    <form
                        className="addblog-form"
                        onSubmit={handleSubmit}
                    >
                        {/* Title */}
                        <div className="addblog-field">
                            <label htmlFor="blog-title">Title</label>

                            <input
                                id="blog-title"
                                type="text"
                                placeholder="Enter your blog title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="addblog-field">
                            <label htmlFor="blog-description">
                                Description
                            </label>

                            <textarea
                                id="blog-description"
                                placeholder="Write your blog description here..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        {/* Image Upload */}
                        <div className="addblog-field">
                            <label htmlFor="blog-image">
                                Upload Image
                            </label>

                            <div className="addblog-upload-box">
                                <input
                                    id="blog-image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required
                                />

                                <p className="addblog-upload-help">
                                    PNG, JPG or JPEG. Maximum size 5 MB.
                                </p>

                                {imagePreview && (
                                    <div className="addblog-preview-container">
                                        <p>Image Preview</p>

                                        <img
                                            src={imagePreview}
                                            alt="Selected blog preview"
                                            className="addblog-image-preview"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {error && (
                            <p className="addblog-error" role="alert">
                                {error}
                            </p>
                        )}

                        <button
                            className="addblog-submit"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Blog'}
                        </button>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer id="foot">
                <div id="foot1">
                    <img src={iconblog} alt="Blogs" />

                    <p>
                        Most developer friendly & highly
                        <br />
                        customisable Admin Dashboard Template
                    </p>

                    <p>
                        <img src={fouricon} alt="Social media" />
                    </p>
                </div>

                <div id="foot2">
                    <p>Company</p>
                    <p>About us</p>
                    <p>Blogs</p>
                </div>

                <div id="foot3">
                    <p>Quick Links</p>
                    <p>Terms of service</p>
                    <p>Policy Privacy</p>
                    <p>Get in touch</p>
                </div>

                <div id="foot4">
                    <p>Contact Us</p>
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
                <p>2025 <b>Blogs,</b> All rights reserved</p>
            </div>

        </div>
    );
}

export default AddBlog;
