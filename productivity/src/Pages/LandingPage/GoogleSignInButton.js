import React from 'react';
import { signInWithGoogle } from "../../Action/userAction";
import { IoLogoGoogle } from "react-icons/io5";
import { LinkButton } from "../../Component/Common/LinkButton";
import { useDispatch } from "react-redux";

export const GoogleSignInButton = (props) => {
    const dispatch = useDispatch();

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle());
    }

    return (
        <LinkButton onClick={handleGoogleSignIn} {...props}>
            <IoLogoGoogle size={'2rem'}/>
        </LinkButton>
    );
}