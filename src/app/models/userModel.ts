export  class  User {
    email: string = '' ; 
    password: string = ''; 
    role : string = 'user'; 

    constructor(name : string , password : string , role?: string){
        this.email = name ; 
        this.password = password ;
        if (role) {
            this.role = role;
        }
    }

}


export interface AuthResponse {
  message: any;
  status(status: any, message: any): unknown;
  token: string;
  expiresIn?: number;
  user?: any;
}
 