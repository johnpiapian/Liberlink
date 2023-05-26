export const getCurrentUser = (session) => {
    if (!session || !session.user) return null;
    return session.user;
};