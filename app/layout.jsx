import '@styles/globals.css';

import Provider from '@components/Provider';

export const metadata = {
    title: 'My Awesome Site',
    description: 'This is my site description'
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <main className="app">
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
}

export default RootLayout;