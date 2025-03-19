import { createServer, Model } from 'miragejs';
import { userFactory } from './factories/user.factory';

export function startMockServer() {
  createServer({
    models: {
      user: Model,
    },

    factories: {
      user: userFactory,
    },

    seeds(server) {
      server.createList('user', 500);
    },

    routes() {
      this.namespace = 'api';
      this.get('/users', (schema) => {return schema.all('user');});
    }
  });
}
