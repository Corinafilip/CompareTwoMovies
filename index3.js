const fetchData = async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "58b2fb2b",
        i: 'tt0848228',
      
      },
    });

    console.log(response.data);

};

fetchData();