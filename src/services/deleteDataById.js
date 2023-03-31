import React from "react";
import axios from "axios";

export const deleteDatabyId = async(url,id) => {
    
    const response = await axios.delete(url + id.toString());
    //window.location.reload(true);
    return response.data;
}