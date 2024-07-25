import axios from 'axios';

const API_KEY = 'xFfctteWOypgagJ0CEII1erBf-X_WJbV89-X4NyEOy4';
const BASE_URL = 'https://api.unsplash.com/';

export const fetcImages = async (query, perPage = 5, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}search/photos`, {
      params: {
        query,
        per_page: perPage,
        page,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    throw error;
  }
};
