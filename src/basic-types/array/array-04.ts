{
  interface IUser {
    name: string;
    age: number;
    isVaild: boolean;
  }

  let userArr: IUser[] = [
    {
      name: 'Neo',
      age: 85,
      isVaild: true,
    },
    {
      name: 'Lewis',
      age: 52,
      isVaild: false,
    },
    {
      name: 'Evan',
      age: 36,
      isVaild: true,
    },
  ];
}
