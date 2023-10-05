import $api from "../http";


export default class UserService {
    static fetchUser() {
        return $api.get('/account/info')
    }
}