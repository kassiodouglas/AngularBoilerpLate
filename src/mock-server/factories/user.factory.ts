import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export const userFactory = Factory.extend({
  id() {
    return faker.string.uuid();
  },
  name() {
    return faker.person.fullName();
  },
  login() {
    return faker.person.middleName();
  },
  last_access() {
    return faker.date.between({ from: '2025-03-01', to: Date.now() });
  },
  status() {
    return faker.helpers.arrayElement(['ATIVO', 'INATIVO','BLOQUEADO']);
  },
  profile() {
    return faker.helpers.arrayElement(['ADMINISTRADOR', 'USUÁRIO', 'GERENTE', 'SUPORTE']);
  }
});
