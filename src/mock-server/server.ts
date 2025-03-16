import { createServer, Model, belongsTo } from 'miragejs';

export function startMockServer() {
  createServer({
    models: {
    },

    factories: {
    },

    seeds(server) {
    },

    routes() {
      this.namespace = 'api';
    }
  });
}
