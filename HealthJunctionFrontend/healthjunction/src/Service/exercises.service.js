import axios from "axios";

const BASE_API_URL="http://localhost:7070/exercise";

class ExerciseService{
   
    saveExercise(exercise){
        return axios.post(BASE_API_URL+"/add",exercise);
    }
    getExercise(id){
        return axios.get(BASE_API_URL+"/list/"+id);
    }
}
export default new ExerciseService();