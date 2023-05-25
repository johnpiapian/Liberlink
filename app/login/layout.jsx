import '@styles/globals.css';

export const metadata = {
    title: 'Login',
    description: 'Please login to continue'
};

const AuthLayout = ({ children }) => {
    return (
        <>{children}</>
    );
}

export default AuthLayout;