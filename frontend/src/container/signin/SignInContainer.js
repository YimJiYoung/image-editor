import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { SignApi } from '../../utils/api';
import userContext from '../../utils/context';
import FormField from '../../components/signin/FormField';
import { pathUri } from '../../constants/path';

const SignInContainer = (props) => {
    const { history } = props;
    const { data, setData } = useContext(userContext);

    const login = async (state) => {
        const data = {
            email: state.email,
            password: state.password,
        };
        try {
            const { user } = await SignApi('http://localhost:9000/auth/login', { data });
            handleSuccess(user);
        } catch(err) {
            console.log(err);
        }
    }

    const guestLogin = () => {
        history.push(pathUri.editor);
    }

    const handleSuccess = (user) => {
        setData({
            ...data, userName: user.name
        })
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