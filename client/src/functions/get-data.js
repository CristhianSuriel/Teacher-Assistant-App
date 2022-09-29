// Gets password app data
export const getPassData = async () => {
  try {
    const serverResponse = await fetch('http://localhost:8000/pass-data', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await serverResponse.json();
  } catch (error) { throw error }
};

// Gets list of notes and their data
export const getNoteData = async () => {
  try {
    const serverResponse = await fetch('http://localhost:8000/notes', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await serverResponse.json();
  } catch (error) { throw error }
};