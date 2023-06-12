import axios from "axios";

const BASE_API_URL="http://localhost:7070/medicinedetails";

class MedicineService{
   
    saveHealth(medicine){
        return axios.post(BASE_API_URL+"/add",medicine);
    }
    getMedicine(id){
        return axios.get(BASE_API_URL+"/list/"+id);
    }
    
}
export default new MedicineService();