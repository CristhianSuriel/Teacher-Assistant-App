export const updateNoteData = async (noteID, newSubject, newText, newDate) => {
  try {
    const serverResponse = await fetch(`http://localhost:8000/notes/${noteID}`, {
      method: 'PUT',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: newSubject,
        text: newText,
        date: newDate
      })
    });

    return await console.log(serverResponse.json());
  } catch (error) { throw error }
};