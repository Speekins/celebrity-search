function fetchData(url) {
  let apiKey = 'SifNA2RhpPfgEoQbbq2/XQ==lBq3dEiRVe13vSyf'
  return fetch(url, {
    method: 'GET',
    headers: { 
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  .then(data => data.json())
}

export default fetchData