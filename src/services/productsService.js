'use strict';
import axiosInstance from '../config/axios';

class ProductsService {
    async getProducts() {
        try {
            const response = await axiosInstance.get('/products');
            
            return response.data;
        } catch (err) {
            console.error('Error fetching products:', err);

            throw err;
        }
    }
}

export default new ProductsService();
