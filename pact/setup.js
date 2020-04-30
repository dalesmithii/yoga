import { resolve } from 'path';
import { Pact } from '@pact-foundation/pact';

global.port = 8080;
global.provider = new Pact({
    cors: true,
    port: global.port,
    log: resolve(process.cwd(), 'logs', 'pact.log'),
    loglevel: 'debug',
    dir: resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'update',
    consumer: 'yoga-consumer',
    provider: 'yoga-provider',
    host: '127.0.0.1'
});