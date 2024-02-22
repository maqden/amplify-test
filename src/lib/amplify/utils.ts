import {cookies} from "next/headers";

import {generateServerClientUsingCookies} from "@aws-amplify/adapter-nextjs/api";
import {createServerRunner} from "@aws-amplify/adapter-nextjs";
import {getCurrentUser} from "aws-amplify/auth/server";
import {type Schema} from "~/amplify/data/resource";
import config from "~/amplifyconfiguration.json";

export const {runWithAmplifyServerContext} = createServerRunner({config});
export const cookiesClient = generateServerClientUsingCookies<Schema>({config, cookies});

export async function AuthGetCurrentUserServer() {
    try {
        return await runWithAmplifyServerContext({
            operation: (contextSpec) => getCurrentUser(contextSpec),
            nextServerContext: {cookies},
        });
    } catch (error) {
        console.error(error);
    }
}