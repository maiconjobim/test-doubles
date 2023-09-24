import { AdminUserSpy } from "../spy/user.spy"

export class AdminUserMock extends AdminUserSpy {
    constructor(
        private expectedPermissionCalledTimes: number
        ) {
        super()
    }

    validate(): boolean {
        return this.getPermissionCalledTimes() === this.expectedPermissionCalledTimes
    }
}