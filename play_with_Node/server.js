import { createServer } from "http";

const server = createServer((req, res) => {
	const myURL = new URL(req.url, `http://${req.headers.host}`);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	console.log(__dirname, __filename);
	if (myURL.pathname === '/add/new') {
		res.end(JSON.stringify({ message: "welcome to add/new" }));
	} else {

		res.end(JSON.stringify({
			pathname: myURL.pathname,
			search: myURL.search,
			searchParams: myURL.searchParams,
			host: myURL.host,
			reqhost: req.headers.host,
			userAgnet: req.headers["user-agent"]


		}))
	}

});

server.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
