export const signUp = async ({ username, password, email }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password, email
      }),
      mode: 'cors',
    })
      if (!res.ok) throw new Error('Invalid login credentials')
      return res.json();
    
  } catch (error) {
    throw error;
  }
} 

export const signIn = async ({ password, email }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password, email
      }),
      mode: 'cors',
    })
      if (!res.ok) throw new Error('Invalid login credentials')
      return res.json();
    
  } catch (error) {
    throw error;
  }
}

export const signOut = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'DELETE',
      mode: 'cors',
    })
    return res.ok;
  } catch (error) {
    throw error;
  }
}