import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { LinkButton } from "../../Component/Common/LinkButton";

export const FacebookSignInButton = (props) => {

    const handleFacebookSignIn = () => {
        window.alert('Sign In with Facebook');
    }

    return (
        <LinkButton onClick={handleFacebookSignIn} {...props}>
            <IoLogoFacebook size={'2rem'}/>
        </LinkButton>
    );
}