// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// import '../Css/login.css';

// function Login() {
//     const navigate = useNavigate();

//     const [emailOrUsername, setEmailOrUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setremember] = useState(false);


//     const handleLogin = () => {
//         navigate('/adventure');
//     };







//     return (
//         <>
//             <div id='container'>
//                 <div id='secdiv'>

//                     {/* header  */}
//                     <div id='head'>
//                         <h1>Blogs</h1>
//                     </div>

//                     <br />

//                     {/* welcome block */}
//                     <div id='welcome'>
//                         <h2>Welcome to Blogs!</h2>
//                     </div>

//                     <div id='para'>
//                         <p>Please sign-in to your account and start the  <br />adventure</p>
//                     </div>
//                     <br />

//                     <div id='inputu'>
//                         <label htmlFor="" id='labell'>Email or Username</label>
//                         <br /><input type="text" id='butt' placeholder='Enter your email or username'
//                             value={emailOrUsername}
//                             onChange={(e) => setEmailOrUsername(e.target.value)} />
//                     </div>
//                     <br />

//                     <div id='inputp'>
//                         <label id='labelsec' htmlFor="">Password</label>
//                         <br /><input type="password" id='butt' placeholder='...........................................'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     <br />

//                     <div id='remm'>
//                         <label ><input type="checkbox" checked={rememberMe}
//                             onChange={(e) => setremember(e.target.checked)} /><span id='rr'>Remember Me</span></label>        <Link to="/forgot" id='secrr'>Forgot Password?</Link>
//                     </div>
//                     <br />
//                     <div id='log'>

//                         <button id='logiin' onClick={handleLogin}>Login</button>


//                     </div>
//                     <br />

//                     <div id='foott'>
//                         {/* New on our platforms? <span id='ll'>Create an account</span> */}
//                         <div id='foooot'>
//                             New on our platforms?{' '}
//                             <Link to="/adventure" id='lllll'>
//                                 Create an account
//                             </Link>
//                         </div>

//                     </div>

//                 </div>









//             </div>
//         </>
//     )
// }
// export default Login;



// 

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../Css/login.css';

// function Login() {
//     const navigate = useNavigate();

//     const [emailOrUsername, setEmailOrUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setremember] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         if (!emailOrUsername.trim() || !password) {
//             setError('Please enter email and password');
//             return;
//         }

//         try {
//             setLoading(true);

//             const response = await fetch(
//                 'http://localhost:3000/api/user/login-user',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         email: emailOrUsername.trim(),
//                         password: password,
//                     }),
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(result.message || 'Login failed');
//             }

//             const token = result.data;

//             if (!token) {
//                 throw new Error('Login token was not returned by backend');
//             }

//             // Save token
//             if (rememberMe) {
//                 localStorage.setItem('token', token);
//                 sessionStorage.removeItem('token');
//             } else {
//                 sessionStorage.setItem('token', token);
//                 localStorage.removeItem('token');
//             }

//             // Clear input fields after successful login
//             setEmailOrUsername('');
//             setPassword('');
//             setremember(false);

//             // Open MyBlogs after successful login
//             // navigate('/MyBlogs');
//             navigate('/AllBlogs');

//         } catch (err) {
//             setError(
//                 err.message === 'Failed to fetch'
//                     ? 'Backend se connection nahi ho raha. Check karo server port 3000 par chal raha hai.'
//                     : err.message
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <div id="container">
//                 <div id="secdiv">

//                     <div id="head">
//                         <h1>Blogs</h1>
//                     </div>

//                     <br />

//                     <div id="welcome">
//                         <h2>Welcome to Blogs!</h2>
//                     </div>

//                     <div id="para">
//                         <p>
//                             Please sign-in to your account and start the
//                             <br /> adventure
//                         </p>
//                     </div>

//                     <br />

//                     <form onSubmit={handleLogin} autoComplete="off">
//                         <div id="inputu">
//                             <label htmlFor="email" id="labell">
//                                 Email
//                             </label>
//                             <br />
//                             <input
//                                 type="email"
//                                 id="butt"
//                                 name="login-email"
//                                 placeholder="Enter your email"
//                                 value={emailOrUsername}
//                                 autoComplete="off"
//                                 onChange={(e) =>
//                                     setEmailOrUsername(e.target.value)
//                                 }
//                             />
//                         </div>

//                         <br />

//                         <div id="inputp">
//                             <label id="labelsec" htmlFor="password">
//                                 Password
//                             </label>
//                             <br />
//                             <input
//                                 type="password"
//                                 id="butt"
//                                 name="login-password"
//                                 placeholder="Enter your password"
//                                 value={password}
//                                 autoComplete="new-password"
//                                 onChange={(e) =>
//                                     setPassword(e.target.value)
//                                 }
//                             />
//                         </div>

//                         <br />

//                         <div id="remm">
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     checked={rememberMe}
//                                     onChange={(e) =>
//                                         setremember(e.target.checked)
//                                     }
//                                 />
//                                 <span id="rr">Remember Me</span>
//                             </label>

//                             <Link to="/forgot" id="secrr">
//                                 Forgot Password?
//                             </Link>
//                         </div>

//                         <br />

//                         {error && (
//                             <p style={{ color: 'red' }}>{error}</p>
//                         )}

//                         <div id="log">
//                             <button
//                                 id="logiin"
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Logging in...' : 'Login'}
//                             </button>
//                         </div>
//                     </form>

//                     <br />

//                     <div id="foott">
//                         <div id="foooot">
//                             New on our platforms?{' '}
//                             <Link to="/adventure" id="lllll">
//                                 Create an account
//                             </Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

// export default Login;





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../Css/login.css';

// function Login() {
//     const navigate = useNavigate();

//     const [emailOrUsername, setEmailOrUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setremember] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         if (!emailOrUsername.trim() || !password) {
//             setError('Please enter email and password');
//             return;
//         }

//         try {
//             setLoading(true);

//             const response = await fetch(
//                 'http://localhost:3000/api/user/login-user',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         email: emailOrUsername.trim(),
//                         password: password,
//                     }),
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(result.message || 'Login failed');
//             }

//             // Backend se token aur user ki details lena
//             const token =
//                 typeof result.data === 'string'
//                     ? result.data
//                     : result.data?.token;

//             const user =
//                 typeof result.data === 'object'
//                     ? result.data?.user
//                     : null;

//             if (!token) {
//                 throw new Error(
//                     'Login token nahi mila. Backend login response check karo.'
//                 );
//             }

//             // Username profile mein dikhane ke liye
//             const profileName =
//                 user?.username ||
//                 user?.email ||
//                 emailOrUsername.trim();

//             // Remember Me checked ho to localStorage
//             if (rememberMe) {
//                 localStorage.setItem('token', token);
//                 localStorage.setItem('profileName', profileName);

//                 if (user?._id) {
//                     localStorage.setItem('userId', user._id);
//                 }

//                 sessionStorage.removeItem('token');
//                 sessionStorage.removeItem('profileName');
//                 sessionStorage.removeItem('userId');
//             } else {
//                 // Otherwise sessionStorage
//                 sessionStorage.setItem('token', token);
//                 sessionStorage.setItem('profileName', profileName);

//                 if (user?._id) {
//                     sessionStorage.setItem('userId', user._id);
//                 }

//                 localStorage.removeItem('token');
//                 localStorage.removeItem('profileName');
//                 localStorage.removeItem('userId');
//             }

//             // Input fields clear karna
//             setEmailOrUsername('');
//             setPassword('');
//             setremember(false);

//             // Login ke baad AllBlogs page khulega
//             navigate('/AllBlogs');

//         } catch (err) {
//             setError(
//                 err.message === 'Failed to fetch'
//                     ? 'Backend se connection nahi ho raha. Check karo server port 3000 par chal raha hai.'
//                     : err.message
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <div id="container">
//                 <div id="secdiv">

//                     <div id="head">
//                         <h1>Blogs</h1>
//                     </div>

//                     <br />

//                     <div id="welcome">
//                         <h2>Welcome to Blogs!</h2>
//                     </div>

//                     <div id="para">
//                         <p>
//                             Please sign-in to your account and start the
//                             <br /> adventure
//                         </p>
//                     </div>

//                     <br />

//                     <form onSubmit={handleLogin} autoComplete="off">
//                         <div id="inputu">
//                             <label htmlFor="email" id="labell">
//                                 Email
//                             </label>
//                             <br />
//                             <input
//                                 type="email"
//                                 id="butt"
//                                 name="login-email"
//                                 placeholder="Enter your email"
//                                 value={emailOrUsername}
//                                 autoComplete="off"
//                                 onChange={(e) =>
//                                     setEmailOrUsername(e.target.value)
//                                 }
//                             />
//                         </div>

//                         <br />

//                         <div id="inputp">
//                             <label id="labelsec" htmlFor="password">
//                                 Password
//                             </label>
//                             <br />
//                             <input
//                                 type="password"
//                                 id="butt"
//                                 name="login-password"
//                                 placeholder="Enter your password"
//                                 value={password}
//                                 autoComplete="new-password"
//                                 onChange={(e) =>
//                                     setPassword(e.target.value)
//                                 }
//                             />
//                         </div>

//                         <br />

//                         <div id="remm">
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     checked={rememberMe}
//                                     onChange={(e) =>
//                                         setremember(e.target.checked)
//                                     }
//                                 />
//                                 <span id="rr">Remember Me</span>
//                             </label>

//                             <Link to="/forgot" id="secrr">
//                                 Forgot Password?
//                             </Link>
//                         </div>

//                         <br />

//                         {error && (
//                             <p style={{ color: 'red' }}>{error}</p>
//                         )}

//                         <div id="log">
//                             <button
//                                 id="logiin"
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Logging in...' : 'Login'}
//                             </button>
//                         </div>
//                     </form>

//                     <br />

//                     <div id="foott">
//                         <div id="foooot">
//                             New on our platforms?{' '}
//                             <Link to="/adventure" id="lllll">
//                                 Create an account
//                             </Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

// export default Login;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/login.css';

function Login() {
    const navigate = useNavigate();

    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setremember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!emailOrUsername.trim() || !password) {
            setError('Please enter email and password');
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                'http://localhost:3000/api/user/login-user',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: emailOrUsername.trim(),
                        password,
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            const token = result.data?.token;
            const user = result.data?.user;

            if (!token) {
                throw new Error('Login token nahi mila.');
            }

            const username = user?.username || '';
            const email = user?.email || emailOrUsername.trim();
            const userId = user?._id || '';

            // Purana login data clear karo
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('profileName');
            localStorage.removeItem('userId');

            sessionStorage.removeItem('token');
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('profileName');
            sessionStorage.removeItem('userId');

            // Remember Me ke according data save karo
            const storage = rememberMe ? localStorage : sessionStorage;

            storage.setItem('token', token);
            storage.setItem('username', username);
            storage.setItem('email', email);
            storage.setItem('profileName', username || email);

            if (userId) {
                storage.setItem('userId', userId);
            }

            // Login successful hone par fields clear karo
            setEmailOrUsername('');
            setPassword('');
            setremember(false);

            navigate('/AllBlogs');

        } catch (err) {
            setError(
                err.message === 'Failed to fetch'
                    ? 'Backend se connection nahi ho raha. Check karo server port 3000 par chal raha hai.'
                    : err.message
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div id="container">
                <div id="secdiv">

                    <div id="head">
                        <h1>Blogs</h1>
                    </div>

                    <br />

                    <div id="welcome">
                        <h2>Welcome to Blogs!</h2>
                    </div>

                    <div id="para">
                        <p>
                            Please sign-in to your account and start the
                            <br /> adventure
                        </p>
                    </div>

                    <br />

                    <form onSubmit={handleLogin} autoComplete="off">
                        <div id="inputu">
                            <label htmlFor="email" id="labell">
                                Email
                            </label>
                            <br />
                            <input
                                type="email"
                                id="butt"
                                name="login-email"
                                placeholder="Enter your email"
                                value={emailOrUsername}
                                autoComplete="off"
                                onChange={(e) =>
                                    setEmailOrUsername(e.target.value)
                                }
                            />
                        </div>

                        <br />

                        <div id="inputp">
                            <label id="labelsec" htmlFor="password">
                                Password
                            </label>
                            <br />
                            <input
                                type="password"
                                id="butt"
                                name="login-password"
                                placeholder="Enter your password"
                                value={password}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />
                        </div>

                        <br />

                        <div id="remm">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) =>
                                        setremember(e.target.checked)
                                    }
                                />
                                <span id="rr">Remember Me</span>
                            </label>

                            <Link to="/forgot" id="secrr">
                                Forgot Password?
                            </Link>
                        </div>

                        <br />

                        {error && (
                            <p style={{ color: 'red' }}>{error}</p>
                        )}

                        <div id="log">
                            <button
                                id="logiin"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>

                    <br />

                    <div id="foott">
                        <div id="foooot">
                            New on our platforms?{' '}
                            <Link to="/register" id="lllll">
                                Create an account
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;