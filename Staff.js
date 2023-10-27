import { faker } from '@faker-js/faker';

// Define an array of staff members with fake data
const Staff = [
  {
    key: 0,
    avatar: faker.image.avatar(), // Generate a fake avatar image
    name: faker.person.firstName(), // Generate a fake first name
    birthdate: faker.date.birthdate(), // Generate a fake birthdate
  },
  {
    key: 1,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    birthdate: faker.date.birthdate(),
  },
  {
    key: 2,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    birthdate: faker.date.birthdate(),
  },
];

export default Staff;
