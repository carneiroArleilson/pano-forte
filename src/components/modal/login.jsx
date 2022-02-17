import React from 'react'
import './modal.css'
// import { GoogleAuthProvider } from "firebase/auth";

export default function (){
    // const provider = new GoogleAuthProvider();
    return <div class="login">
        <div class="d-flex justify-content-center"><h5>Login</h5></div>
        <form method="POST" id="insert_form">
            <div>
                <label htmlFor="Email">Email:</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="Senha">Senha:</label>
                <input type="password"/>
            </div>
            <input type="submit" name="logon" id="logon" value="Entrar" class="btn btn-primary"/>
            {/* <button onClick="provider">Google</button> */}
        </form>
    </div>
}
