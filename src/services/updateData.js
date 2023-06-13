import React from 'react';
import axios from 'axios';

export const updateData = (url,data) => {
  
    const response = axios.put(url,data);
    return response.data;
  
}
