export const allEvents = (page, limit) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/all?page=${page}&limit=${limit}`,
    {
      method: "GET",
      // mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const sendMsg = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
