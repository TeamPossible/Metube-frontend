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

  // const { rows } = await client.from('videos').insert({
  //   video: `${bucketUrl}/${user_id}/${media.name}`,
  //   user_id,
  //   username,
  // });

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

  // return rows;
};

export const getAllMedia = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/media`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Invalid login credentials');
    console.log('RESPONSE', res);
    return res.json();
  } catch (error) {
    throw error;
  }
};

export const getById = async (id) => {
  const rows = await client.from('videos').select().match({ id }).single();
  return rows.data;
};
