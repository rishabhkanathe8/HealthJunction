import axios from "axios";

const BASE_API_URL="http://localhost:7070/healthdata";

class HealthDataService{
   
    saveHealth(healthdata){
        return axios.post(BASE_API_URL+"/add",healthdata);
    }

    getHealthList(id){
        return axios.get(BASE_API_URL+"/list/"+id);
    }
    
}
export default new HealthDataService();