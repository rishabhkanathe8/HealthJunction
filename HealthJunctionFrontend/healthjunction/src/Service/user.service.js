import axios from "axios";

const BASE_API_URL="http://localhost:7070/user";

class UserService{
    login(authRequest){
        return axios.post(BASE_API_URL+"/login",authRequest);
    }
    saveUser(user){
        return axios.post(BASE_API_URL+"/add",user);
    }
    
}
export default new UserService();