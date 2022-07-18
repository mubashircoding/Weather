export const geoAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));