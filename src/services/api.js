import axios from 'axios';

const API_KEY = "xFfctteWOypgagJ0CEII1erBf-X_WJbV89-X4NyEOy4";

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const fetcImages = async (query, perPage = 5, page = 1) => {
  try {
    const response = await unsplashApi.get('search/photos', {
      params: {
        query,
        per_page: perPage,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    throw error;
  }
};
