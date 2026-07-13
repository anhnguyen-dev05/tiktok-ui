import request from '@/utils/http';

export const search = async (keyword, type = 'less') => {
  try {
    const response = await request.get('users/search', {
      params: {
        keyword,
        type,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
