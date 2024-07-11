import axios from 'axios';



export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    method: 'GET',
    headers: {
      'x-api-key':
        'live_veNZdtcwPdxTq8JCOCN8dW0LvRfMhLJHM4uZOHDCWDC5ve8GaIeqqX5Y2CT6lrKI',
    },
  });
}

export function fetchCatByBreed(identifier) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${identifier}`,
    {
      method: 'GET',
      headers: {
        'x-api-key':
          'live_veNZdtcwPdxTq8JCOCN8dW0LvRfMhLJHM4uZOHDCWDC5ve8GaIeqqX5Y2CT6lrKI',
      },
    }
  );
}

export function fetchDogByBreed(identifier) {
  return fetch(
    `https://api.thedogapi.com/v1/images/search?breed_ids=${identifier}`,
    {
      method: 'GET',
      headers: {
        'x-api-key':
          'live_veNZdtcwPdxTq8JCOCN8dW0LvRfMhLJHM4uZOHDCWDC5ve8GaIeqqX5Y2CT6lrKI',
      },
    }
  );
}






export const startSrch = async srchTerm => {
  try {
    const response = await axios.get(`https://pixabay.com/api/videos/`, {
      params: {
        key: '41151959-2696743ecd3219a7fd97287eb',
        q: srchTerm,
        video_type: 'all',
        safesearch: true,
        per_page: 12,
        page: 1,
        min_width: 300,
        min_height: 350,
      },
    });
    const users = await response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const loadSrch = async (srchTerm, pageNum) => {
  try {
    const response = await axios.get(`https://pixabay.com/api/videos/`, {
      params: {
        key: '41151959-2696743ecd3219a7fd97287eb',
        q: srchTerm,
        video_type: 'all',
        safesearch: true,
        per_page: 12,
        page: pageNum,
        min_width: 300,
        min_height: 350,
      },
    });
    const users = await response.data;
    return users;
  } catch (error) {
    console.error(error);
  }
};