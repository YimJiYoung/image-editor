import React from 'react';
import { withRouter } from 'react-router-dom';
import { SignApi } from '../../utils/api';
import FormField from '../../components/signin/FormField';
import { pathUri } from '../../constants/path';

const SignInContainer = (props) => {
    const { history } = props;

    const login = async (state) => {
        const data = {
            email: state.email,
            password: state.password,
        };
        try {
            const { user } = await SignApi('/auth/login', { data });
            handleSuccess(user);
        } catch(err) {
            console.log(err);
        }
    }

    const guestLogin = () => {
        history.push(pathUri.editor);
    }

    const handleSuccess = (user) => {
        history.push(pathUri.board);
    };

    return (
        <>
            <FormField  
                loginState={true}
                login={login}
                guestLogin={guestLogin}
            />
        </>
    );
};

export default withRouter(SignInContainer);