import React from 'react';
import '../Css/forgot.css'
function Forgot() {
    return (
        <>
            <div>
                <div id='contain'>


                    <h1 id='b' >Blogs</h1>
                    <h2 id='c'>Forgot password</h2>
                    <p id='d'>please enter you email</p>
                    <br />

                    <div id='lab'>
                        <label id='uu' htmlFor="">Email</label>
                        <br /><input id='ii' type="text" placeholder='Enter your email' />
                    </div>
                    <div>
                        <br />
                        <button id='butto'>Send</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Forgot;