export const deleteNoteData = async (objID) => {
  try {
    const serverResponse = await fetch(`http://localhost:8000/notes/${objID}`, {
      method: 'DELETE',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await console.log(serverResponse.json());
  } catch (error) { throw error }
};