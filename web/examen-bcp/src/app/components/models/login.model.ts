export class LoginModel{

  constructor(
    public username: string,
    public password: string,
    public grant_type: string
  ){}
}

export class ResponseTokenModel{
  constructor(
    public access_token:string,
    public token_type: string,
    public refresh_token: string,
    public expires_in: number,
    public scope: string,
    public apellido: string,
    public nombre: string,
    public correo: string,
    public jti: string
  ){}
}
