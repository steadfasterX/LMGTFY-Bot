'use strict';

const config = require('../loadconfig');
const axios = require('axios');

var querystring = require('querystring');

const createShortener = url =>
	axios.get('https://tinyurl.com/api-create.php?' + querystring.stringify({ ...config['tinyurl.com'], url }))
		.then(res => res.data);

module.exports = createShortener;
