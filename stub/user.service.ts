

export class UserService {
    create(user:CreateUserDto,currentUser: IUser) {
        if (currentUser.getPermission() !== 'admin') {
            throw new Error('Não pode criar usuário sem permissão');
        }
        if (user.age < 18) {
            throw new Error('Não pode criar usuário menor de idade');
        }
        if (user.name == '') {
            throw new Error('Não pode criar usuário sem nome');
        }
        // continuação da lógica ...
        return true
    }
}

export interface IUser {
    name: string
    age: number

    getCompany(): string
    getPermission(): string
}

export class CreateUserDto {
    name: string
    age: number
}