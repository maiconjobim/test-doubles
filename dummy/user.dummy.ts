import { IUser } from "./user.service"

export class UserDummy implements IUser {
    name : string
    age : number

    getCompany(): string {
        return ''
    }
}