const w = new Weather('98055', 'us');

w.getWeather()
	.then(function (data) {
		console.log(data);
	})
	.catch(function (err) {
		console.elog(err);
	})
