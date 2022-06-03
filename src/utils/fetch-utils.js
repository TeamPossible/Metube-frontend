import { client } from '../services/client';

export const signUp = async ({ username, password, email }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      mode: 'cors',
      credentials: 'include',
    });
    console.log('RESPONSE FROM SIGN UP', res);
    if (!res.ok) throw new Error('Invalid login credentials');
    return res.json();
  } catch (error) {
    throw error;
  }
};

export const signIn = async ({ password, email }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        email,
      }),
      mode: 'cors',
    });
    if (!res.ok) throw new Error('Invalid login credentials');
    return res.json();
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'DELETE',
      mode: 'cors',
    });
    return res.ok;
  } catch (error) {
    throw error;
  }
};

const videoBucket = async (user_id, media) => {
  const response = await client.storage
    .from('videos')
    .upload(`${user_id}/${media.name}`, media, {
      cacheControl: '3600',
      upsert: false,
    });
  response;
};

export const uploadVideo = async (user_id, title, description, media) => {
  const bucketUrl = process.env.SUPABASE_BUCKET;

  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/media`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
        title,
        description,
        video_url: `${bucketUrl}/${user_id}/${media.name}`,
      }),
      mode: 'cors',
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Invalid login credentials');

    await videoBucket(user_id, media);

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const getAllMedia = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/media/videos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://https://heartfelt-chaja-495e99.netlify.app'
      },
      mode: 'cors',
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Something went wrong with the fetch request');
    console.log(res);
    const response = await res.json();
    return response;
  } catch (error) {
    throw error;
  }
};

export const getById = async (id) => {
  console.log('ID IN FETCH', id);

  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/media/videos/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      }
    );
    if (!res.ok) throw new Error('Invalid login credentials');
    const response = await res.json();
    console.log('RESPONSE', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCommentsById = async (id) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/comment/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });
    if (!res.ok) console.log('ERROR RESPONSE', res);
    const response = await res.json();
    if (response === null) {
      return [];
    }
    console.log('COMMENT RESPONSE', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addComment = async (user_id, comment, video_id, username) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
        comment,
        video_id,
        username,
      }),
      mode: 'cors',
      credentials: 'include',
    });
    if (!res.ok) console.log('ERROR RESPONSE', res);
    const response = await res.json();
    console.log('COMMENT RESPONSE', response);
    return response;
  } catch (error) {
    throw error;
  }
};
