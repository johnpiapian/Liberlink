import '@styles/globals.css';

import Provider from '@components/Provider';

export const metadata = {
    title: 'Liberlink',
    description: 'Liberlink is a social media platform for sharing links.'
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