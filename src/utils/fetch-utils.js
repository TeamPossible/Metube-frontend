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

export const uploadVideo = async (user_id, media) => {
  const bucketUrl = process.env.SUPABASE_BUCKET;

  const { rows } = await client
    .from('videos')
    .insert({ video: `${bucketUrl}/${user_id}/${media}`, user_id });
  return rows;
};
