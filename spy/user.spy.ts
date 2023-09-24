import { IUser } from "./user.service"

export class AdminUserSpy implements IUser {
    name : string
    age : number

    count = 0

    getCompany(): string {
        return ''
    }

    getPermission(): string {
        this.count++
        return 'admin'
    }

    getPermissionCalledTimes(): number {
        return this.count
    }
}