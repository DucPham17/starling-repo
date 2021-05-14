import React from 'react';
import { signInWithIdToken } from "../../Action/userAction";
import { IoLogoGoogle } from "react-icons/io5";
import { LinkButton } from "../../Component/Common/LinkButton";
import { useDispatch } from "react-redux";
import GoogleLogin from 'react-google-login';

export const GoogleSignInButton = (props) => {
    const dispatch = useDispatch();
 
    const onSuccess = (response) => {
        dispatch(signInWithIdToken(response.tokenObj.id_token));
    };
 
    const onFailure = (response) => {
        console.log(response);
    };

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
                <LinkButton {...renderProps} {...props}>
                    <IoLogoGoogle size={'2rem'}/>
                </LinkButton>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure} 
            responseType={'id_token'}
        />
    );
}