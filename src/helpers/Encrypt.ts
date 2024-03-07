import bcrypt from "bcrypt"

export class Encrypt {
    static async encryptPass(password: string) {
        return bcrypt.hashSync(password, 12)
    }

    static async comparePass(hashPassword: string, password: string) {
        return bcrypt.compareSync(password, hashPassword)
    }
}