import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { LinkButton } from "../../Component/Common/LinkButton";
import { signInFacebookWithAccessToken } from '../../Action/userAction';
import { FacebookProvider, Login } from 'react-facebook';
import { useDispatch } from 'react-redux';

export const FacebookSignInButton = (props) => {
    const dispatch = useDispatch();

    const handleFacebookSignIn = (response) => {
        dispatch(signInFacebookWithAccessToken(response.tokenDetail.accessToken));
    };

    const handleFacebookError = (e) => {
        console.log(e)
    };

    return (
        <FacebookProvider appId={process.env.REACT_APP_APP_ID}>
            <Login
                scope="email"
                onCompleted={handleFacebookSignIn}
                onError={handleFacebookError}
            >
                {({handleClick}) => (
                    <LinkButton onClick={handleClick} {...props}>
                        <IoLogoFacebook size={'2rem'}/>
                    </LinkButton>
                )}
            </Login>
        </FacebookProvider>
    );
}