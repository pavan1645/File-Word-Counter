var express = require('express');
var http = require('http');
var router = express.Router(); 

var keysSorted;
var freq;

let init = new Promise((resolve, reject) => {
	
	//Fetch file via http
	http.get("http://terriblytinytales.com/test.txt").on('response', (response) => {
		var body = '';
		var i = 0;
		freq = {};
		keysSorted = [];

		response.on('data', function (chunk) {
			body += chunk;
		});

		//When file reading is complete
		response.on('end', function () {
			//Split at all special characters except '
			var words = body.split(/[,|:|/|.|@|;|(|)|<|>|?|"|\-|_|\t|\n| ]+/);
			
			words.forEach(function(word) {
				word = word.toLowerCase();		//convert to lower case
				if (word == "-") return;		//exclude '-' character

				//Add to frequency object
				if (!freq.hasOwnProperty(word)) {
					freq[word] = 0;
				} else {
					freq[word]++;
				}

				//Sorting frequency object
				keysSorted = Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a] })
			});

			/* keysSorted.forEach(function(key) {
				console.log(key + " " + freq[key]);
			}); */
			
		});

	});
});

function printObj(count) {
	var body = [];
	for (var i = 0; i < count; i++) {
		var obj = {
			word: keysSorted[i],
			count: freq[keysSorted[i]]
		}
		body.push(obj);
		//console.log(key + " " + freq[key]);		
	}
	return {"body": body};
}

router.get("/:count", (req, res) => {
	var count  = req.params.count;
	var obj = {};
	if (!keysSorted) {
		init.then(() => {
			obj = printObj(count);
		})
	} else {
		obj = printObj(count);		
	}

	res.json(obj);
});

module.exports = router;