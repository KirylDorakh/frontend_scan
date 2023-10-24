import $api from "../http";

export default class AuthService {

    static async login(login, password) {
        return $api.post(
            "/account/login", {
                "login": login,
                "password": password
            }
        )
    }
}