import axios from "axios";

export default class UserService {

    static async login(login, password) {
        const response = await axios.post(
            "https://gateway.scan-interfax.ru/api/v1/account/login", {
                "login": login,
                "password": password
            }
        )
        return response
    }
}