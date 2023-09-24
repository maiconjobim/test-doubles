import { UserService } from "./user.service"
import { GroupUserStub, AdminUserStub} from "./user.stub"

describe('UserService', () => {
    
    const userService =  new UserService()
    const groupUser = new GroupUserStub()
    const adminUserStub = new AdminUserStub()

    it('Deve retornar erro ao criar usuario se o currentUser for diferente de admin', () => {
        const user = {name: 'pedro', age: 20}
        
        expect(() => userService.create(user, groupUser))
            .toThrowError('Não pode criar usuário sem permissão')
    })

    it('Deve criar usuario se o currentUser for admin', () => {
        const user = {name: 'pedro', age: 20}
        const success = userService.create(user, adminUserStub)

        expect(success).toBe(true)
    })

})