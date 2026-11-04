// import React from 'react';
// import '../Css/adventure.css'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// function Adventure(){

//       const navigate = useNavigate();

//     const handleLogin = () => {
//         navigate('/login');
//     };

//     return(
//         <>
//         <div id='container'>
//         <div id='secdiv'>

//       {/* header  */}
//         <div id='head'>
//             <h1>Blogs</h1>
//         </div>

//         <br />

//          {/* welcome block */}
//         <div id='welcome'>
//             <h2>Adventure starts here</h2>
//         </div>

//         <div id='para'>
//             <p>Please sign-in to your account and start the  <br/>adventure</p>
//         </div>
//         <br />

//         <div id='inputu'>
//             <label htmlFor="">Username</label>
//             <br /><input type="text" id='butt' placeholder='Enter your username' />
//         </div>
//         <br />

//         <div id='inputu'>
//             <label htmlFor="" id='secllab'>Email</label>
//             <br /><input type="text" id='butt' placeholder='Enter your email ' />
//         </div>
//         <br />

//         <div id='inputp'>
//             <label id='labelsec' htmlFor="">Password</label>
//             <br /><input type="text" id='butt' placeholder='...........................................' />
//         </div>
//         <br />

//         <div id='rem'>
//            <label htmlFor=""> <input id='ch' type="checkbox" /><span id='span1'>I agree to</span> <span id='span2'>privacy policy & terms</span></label>
//         </div>
//         <div id='rem1'>
//            <label htmlFor=""> <input id='ch' type="checkbox" /><span id='span1'>Sign Up as</span> <span id='span2'>Admin</span></label>
//         </div>
//          <br />
//          <div id='log'>

//         <button id='logiin' onClick={handleLogin}>Login</button>

//          </div>
//          <br />

//          <div id='foottt'>
//             Already have an account? <Link to="/login" id='ll'>Sign in</Link>
//             {/* <Link to="/forgot" id='secrr'>Forgot Password?</Link> */}
//          </div>

//          </div>









//         </div>
//         </>
//     )
// }

//  export default Adventure; 



// import React, { useState } from 'react';
// import '../Css/adventure.css';
// import { Link, useNavigate } from 'react-router-dom';

// function Adventure() {
//     const navigate = useNavigate();

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [agree, setAgree] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');

//     const handleRegister = async (e) => {
//         e.preventDefault();

//         setMessage('');
//         setError('');

//         if (!username.trim() || !email.trim() || !password) {
//             setError('Please fill all fields');
//             return;
//         }

//         if (!agree) {
//             setError('Please accept privacy policy and terms');
//             return;
//         }

//         try {
//             setLoading(true);

//             const response = await fetch(
//                 'http://localhost:3000/api/user/register-user',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         username: username.trim(),
//                         email: email.trim(),
//                         password: password,
//                     }),
//                 }
//             );

//             const result = await response.json();

//             if (!response.ok) {
//                 throw new Error(result.message || 'Registration failed');
//             }

//             setMessage('Registration successful! Redirecting to login...');

//             setTimeout(() => {
//                 navigate('/login');
//             }, 1500);

//         } catch (err) {
//             setError(err.message || 'Something went wrong');
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
//                         <h2>Adventure starts here</h2>
//                     </div>

//                     <div id="para">
//                         <p>
//                             Please sign-up to your account and start the
//                             <br /> adventure
//                         </p>
//                     </div>

//                     <br />

//                     <form onSubmit={handleRegister}>
//                         <div id="inputu">
//                             <label htmlFor="username">Username</label>
//                             <br />
//                             <input
//                                 // type="text"
//                                 // id="butt"
//                                 // placeholder="Enter your username"
//                                 // value={username}
//                                 // onChange={(e) => setUsername(e.target.value)}
//                                 type="text"
//                                 id="butt"
//                                 placeholder="Enter your username"
//                                 value={username}
//                                 onChange={(e) => {
//                                     const value = e.target.value;

//                                     if (!value.includes('@')) {
//                                         setUsername(value);
//                                     }
//                                 }}


//                             />
//                         </div>

//                         <br />

//                         <div id="inputu">
//                             <label htmlFor="email" id="secllab">Email</label>
//                             <br />
//                             <input
//                                 type="email"
//                                 id="butt"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>

//                         <br />

//                         <div id="inputp">
//                             <label htmlFor="password" id="labelsec">
//                                 Password
//                             </label>
//                             <br />
//                             <input
//                                 type="password"
//                                 id="butt"
//                                 placeholder="Enter your password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>

//                         <br />

//                         <div id="rem">
//                             <label>
//                                 <input
//                                     id="ch"
//                                     type="checkbox"
//                                     checked={agree}
//                                     onChange={(e) => setAgree(e.target.checked)}
//                                 />
//                                 <span id="span1"> I agree to </span>
//                                 <span id="span2">
//                                     privacy policy &amp; terms
//                                 </span>
//                             </label>
//                         </div>

//                         <div id="rem1">
//                             <label>
//                                 <input id="ch" type="checkbox" />
//                                 <span id="span1"> Sign Up as </span>
//                                 <span id="span2">Admin</span>
//                             </label>
//                         </div>

//                         <br />

//                         {error && (
//                             <p style={{ color: 'red' }}>{error}</p>
//                         )}

//                         {message && (
//                             <p style={{ color: 'green' }}>{message}</p>
//                         )}

//                         <div id="log">
//                             <button
//                                 id="logiin"
//                                 type="submit"
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Registering...' : 'Sign Up'}
//                             </button>
//                         </div>
//                     </form>

//                     <br />

//                     <div id="foottt">
//                         Already have an account?{' '}
//                         <Link to="/login" id="ll">
//                             Sign in
//                         </Link>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

// export default Adventure;


import React, { useState } from 'react';
import '../Css/adventure.css';
import { Link, useNavigate } from 'react-router-dom';

function Adventure() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        setMessage('');
        setError('');

        if (!username.trim() || !email.trim() || !password) {
            setError('Please fill all fields');
            return;
        }

        if (!agree) {
            setError('Please accept privacy policy and terms');
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                'https://backend-development-u7x2.onrender.com/api/user/register-user',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username.trim(),
                        email: email.trim(),
                        password: password,
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Registration failed');
            }

            // Clear form fields after successful registration
            setUsername('');
            setEmail('');
            setPassword('');
            setAgree(false);

            setMessage('Registration successful! Redirecting to login...');

            setTimeout(() => {
                navigate('/login');
            }, 1500);

        } catch (err) {
            setError(err.message || 'Something went wrong');
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
                        <h2>Adventure starts here</h2>
                    </div>

                    <div id="para">
                        <p>
                            Please sign-up to your account and start the
                            <br /> adventure
                        </p>
                    </div>

                    <br />

                    <form onSubmit={handleRegister} autoComplete="off">
                        <div id="inputu">
                            <label htmlFor="username">Username</label>
                            <br />
                            <input
                                type="text"
                                id="butt"
                                name="register-username"
                                placeholder="Enter your username"
                                value={username}
                                autoComplete="off"
                                onChange={(e) => {
                                    const value = e.target.value;

                                    if (!value.includes('@')) {
                                        setUsername(value);
                                    }
                                }}
                            />
                        </div>

                        <br />

                        <div id="inputu">
                            <label htmlFor="email" id="secllab">Email</label>
                            <br />
                            <input
                                type="email"
                                id="butt"
                                name="register-email"
                                placeholder="Enter your email"
                                value={email}
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <br />

                        <div id="inputp">
                            <label htmlFor="password" id="labelsec">
                                Password
                            </label>
                            <br />
                            <input
                                type="password"
                                id="butt"
                                name="register-password"
                                placeholder="Enter your password"
                                value={password}
                                autoComplete="new-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <br />

                        <div id="rem">
                            <label>
                                <input
                                    id="ch"
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                />
                                <span id="span1"> I agree to </span>
                                <span id="span2">
                                    privacy policy &amp; terms
                                </span>
                            </label>
                        </div>

                        <div id="rem1">
                            <label>
                                <input id="ch" type="checkbox" />
                                <span id="span1"> Sign Up as </span>
                                <span id="span2">Admin</span>
                            </label>
                        </div>

                        <br />

                        {error && (
                            <p style={{ color: 'red' }}>{error}</p>
                        )}

                        {message && (
                            <p style={{ color: 'green' }}>{message}</p>
                        )}

                        <div id="log">
                            <button
                                id="logiin"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Registering...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>

                    <br />

                    <div id="foottt">
                        Already have an account?{' '}
                        <Link to="/login" id="ll">
                            Sign in
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Adventure;
