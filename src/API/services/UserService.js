import $api from "../http";

export default class UserService {
    static async fetchUser() {
        try{
            return $api.get('/account/info')
        } catch (e) {
            console.log(e)
        }
    }
}