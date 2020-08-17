{
  interface IUser {
    name: string;
    num: number;
    isAdult?: boolean;
  }

  let user: IUser = {
    name: 'Neo',
    num: 123,
  };
}
