import '@styles/globals.css';

export const meta = {
    title: 'My Awesome Site',
    description: 'This is my site description'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    );
}

export default RootLayout;