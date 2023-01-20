case 'google': {
	var q = args.join(" ")
	let result = await fetchJson(`https://api.smkxt7.my.id/api/search/google?query=${q}&apikey=YOUR_APIKEY`)
	results = ${result.result}
	reply(`${results}`)
	}
	break