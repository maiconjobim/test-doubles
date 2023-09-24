import { IUser } from "./user.service"

export class GroupUserStub implements IUser {
    name : string
    age : number

    getCompany(): string {
        return ''
    }

    getPermission(): string {
        return 'group'
    }
}

export class AdminUserStub implements IUser {
    name : string
    age : number

    getCompany(): string {
        return ''
    }

    getPermission(): string {
        return 'admin'
    }
}