

export class UserService {
    create(user:CreateUserDto,currentUser: IUser) {
        if (user.age < 18) {
            throw new Error('Não pode criar usuário menor de idade');
        }
        if (user.name == '') {
            throw new Error('Não pode criar usuário sem nome');
        }
        // continuação da lógica ...
    }
}

export interface IUser {
    name: string
    age: number

    getCompany(): string
}

export class CreateUserDto {
    name: string
    age: number
}