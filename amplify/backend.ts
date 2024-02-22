import {defineBackend} from '@aws-amplify/backend';
import {auth} from './auth/resource';
import {data} from './data/resource';

const backend = defineBackend({auth, data});

// backend.auth.resources.userPool.addDomain('cognito-domain', {
//     cognitoDomain: {
//         domainPrefix: 'maqden-clientes'
//     }
// });