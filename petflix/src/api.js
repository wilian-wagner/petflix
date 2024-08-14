import axios from 'axios';

const API_KEY = 'Ua31Uyr0M9WkVjwBNfTf7GTcIQC1rMbDXSBQeJnVT3IoXzfPFs9bPNYp'; 
const BASE_URL = 'https://api.pexels.com/v1/videos';

export const fetchPetVideos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        query: 'pets',
        per_page: 20, // Increase number of videos per request to 20
      },
    });
    return response.data.videos;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
