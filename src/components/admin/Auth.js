import axios from "axios";
import React from "react";
import { ToastContainer } from 'react-toastify';

import { useHttp } from "../../utils/request.hook";
import { checkEmail, checkPassword } from '../../utils/formValidation'
import 'react-toastify/dist/ReactToastify.css';
import './Auth.scss'
// import axios from 'axios';
// import request from "../../util/request.hook";

import { errorsContext, jwtContext } from '../../utils/context';
const classNames = require('classnames');

export const Auth = () => {

    const { loading, request } = useHttp();
    const { errors, setErrors } = React.useContext(errorsContext)
    const { auth, setAuth, keyStorage } = React.useContext(jwtContext)
    const [formValid, setFormValid] = React.useState(false)
    const [errLog, setErrLog] = React.useState('email cannot be empty')
    const [errPass, setErrPass] = React.useState('password cannot be empty')
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [emailDirty, setEmailDirty] = React.useState(false);
    const [passwordDirty, setPasswordDirty] = React.useState(false);

    React.useEffect(() => {

        if (errLog || errPass) setFormValid(false);
        else setFormValid(true);

    }, [errLog, errPass])

    // let errLog ='', errPass='';
    // console.log(error);

    const emailHandler = (e) => {

        setEmail(e.target.value)
        if (!checkEmail(e.target.value)) {
            setErrLog ( 'incorrect email');
        }
        else setErrLog ('');

    }
    const passwordHandler = (e) => {

        setPassword(e.target.value)
        if (!checkPassword(e.target.value)) {
            setErrPass ( 'password must be longer than 6 characters');
            if(!e.target.value)setErrPass('password cannot be empty');
        }
        else setErrPass ('');

    }

    const loginHandler = async (e) => {
        e.preventDefault();

        // errLog = '';
        // errPass = '';



        // if (!checkPassword(form.password)) {
        //     errPass = ' error'
        // }

        try {

            const result = await request('/api/auth/login', 'POST', {email,password})

            if (result.ok) {

                const { data } = await result.json()
                console.log(data.token);
                if (data.token) {

                    localStorage.setItem(keyStorage, data.token)
                    setAuth(true)
                }
            }

        } catch (err) {
            console.log("error", err);
        }

    }

    // const changeHandler = event => {
    //     setForm({ ...form, [event.target.name]: event.target.value })
    // }


    // React.useEffect(()=>{

    //     setAuth(!!localStorage.getItem(keyStorage));


    // },[])
    // React.useEffect(() => { console.log(errLog); }, [errLog, errPass])


const blurHandler = (e)=>{

switch (e.target.name) {
    case 'email':
        setEmailDirty(true)
        break;

        case 'password':
        setPasswordDirty(true)
            break;

    default:
        break;
}


}




    return (<form  className="authorization">

        <div className="mb-3">
            <label className="form-label" htmlFor="label-login"  >email</label>
            {(emailDirty&&errLog)&&<div className="error">{errLog}</div>}
            <input className={`form-control`} onChange={e=>emailHandler(e)} onBlur={e=>blurHandler(e)} id="login" name="email" value={email} type="text"/>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="label-pass"  >password</label>
            {(passwordDirty&&errPass)&&<div className="error">{errPass}</div>}
            <input className={`form-control`} onChange={e=>passwordHandler(e)} onBlur={e=>blurHandler(e)} id="pass" name="password" type="password" value={password}/>
        </div>
        <button disabled={!formValid} type="submit" onClick={loginHandler} className="btn btn-primary">Submit</button>


    </form>


    )
}