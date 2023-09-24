import { UserService } from "./user.service"
import { AdminUserSpy} from "./user.spy"

describe('UserService', () => {
    
    const userService =  new UserService()
    const adminUserSpy = new AdminUserSpy()

    it('Deve criar usuario se o currentUser for admin', () => {
        const user = {name: 'pedro', age: 20}
        const success = userService.create(user, adminUserSpy)

        expect(success).toBe(true)
        expect(adminUserSpy.getPermissionCalledTimes()).toBe(1)
    })

})