import { UserService } from "./user.service"
import { UserDummy } from "./user.dummy"

describe('UserService', () => {
    
    const userService =  new UserService()
    const userDummy = new UserDummy()

    it('Deve retornar erro ao criar usuario sem nome', () => {
        const user = {name: '', age: 19}
        
        expect(() => userService.create(user, userDummy))
            .toThrowError('Não pode criar usuário sem nome')
    })

})