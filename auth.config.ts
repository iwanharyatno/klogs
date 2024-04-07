import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';


export const authConfig : NextAuthOptions = {
    pages: {
        signIn: '/'
    },
    providers: [
        Credentials({
            credentials: {
                usernameOrEmail: { label: "Username or Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                return null;
            }
        })
    ]
};

export default NextAuth(authConfig);