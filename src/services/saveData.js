
import React from "react";
import axios from "axios";

export const saveData = async (url,data) => {
    const response = axios.post(url,data);
    
    return response;
}