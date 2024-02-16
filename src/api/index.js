import axios from "axios";
const instants=axios.create({
    baseURL:"https://api.coincap.io/v2",
    headers:{
        accept:'application/json',
    }
})
export default instants;