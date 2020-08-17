interface IUser {
  name: string;
  age: number;
}

interface IValidation {
  isValid: boolean;
}

const heropy: IUser = {
  name: 'Heropy',
  age: 36,
  isVaild: true,
};

// const neoo: IUser & IValidation = {
//   name: 'neo',
//   age: 85,
//   isValid: true,
// };
