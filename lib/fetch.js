
module.exports = (url) => {
	return new Promise((resolve, reject) => {
		const http = url.startsWith('https') ? require('https') : require('http');
		const request = http.get(url, (response) => {
			if (response.statusCode < 200 || response.statusCode > 299) {
				reject(new Error('Request failed!  [' + response.statusCode + ']'));
			}
			let data = [];
			response.on('data', (chunk) => data.push(chunk));
			response.on('end', () => resolve(data.join('')));
		});

		request.on('error', (err) => reject(err))
	});
};
