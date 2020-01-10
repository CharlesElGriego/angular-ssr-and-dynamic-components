export class User {
  id: number;
  name: string;
  lastName: string;
  constructor(values?: any) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
