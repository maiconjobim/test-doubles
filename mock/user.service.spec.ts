import { UserService } from "./user.service"
import { AdminUserMock} from "./user.mock"

describe('UserService', () => {
    
    const userService =  new UserService()

    it('Deve criar usuario se o currentUser for admin', () => {
        const adminUserMock = new AdminUserMock(1)
        const user = {name: 'pedro', age: 20}
        const success = userService.create(user, adminUserMock)

        expect(success).toBe(true)
        expect(adminUserMock.validate()).toBe(true)
    })

})