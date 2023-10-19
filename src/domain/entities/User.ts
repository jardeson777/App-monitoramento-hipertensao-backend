class User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  hospital: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    hospital: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.hospital = hospital;
  }
}
