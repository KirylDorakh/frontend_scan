import $api from "../http";

export default class UserService {

    static async fetchUser() {
        return $api.get('/account/info')
    }
}