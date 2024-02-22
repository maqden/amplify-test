import {defineAuth, secret} from '@aws-amplify/backend';

export const auth = defineAuth({
    loginWith: {
        email: true,
        externalProviders: {
            google: {
                scopes: ['email', 'profile'],
                clientId: secret('GOOGLE_CLIENT_ID'),
                clientSecret: secret('GOOGLE_CLIENT_SECRET'),
            },
            callbackUrls: ['http://localhost:3000/'],
            logoutUrls: ['http://localhost:3000/'],
        },
    },
    userAttributes: {
        profilePicture: {
            required: false,
            mutable: true,
        },
    },
});
