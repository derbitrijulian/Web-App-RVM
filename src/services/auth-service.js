export const loginUser = async (email, password) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || 'Login failed');
    }

    return await response.json();
  } catch (err) {
    throw new Error(err.message || 'Something went wrong');
  }
};

export const registerUser = async (formData) => {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Registrasi Gagal.');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Terjadi kesalahan tidak diketahui');
  }
};
