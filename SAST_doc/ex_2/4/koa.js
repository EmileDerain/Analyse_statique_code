
const Koa = require('koa');
const urlLib = require('url');
const app = new Koa();

app.use(async ctx => {
	const targetUrl = ctx.query.target;
    if (isValidUrl(targetUrl)) {
		        ctx.redirect(targetUrl);
    } else {
        ctx.body = 'Invalid target URL';
    }

});

function isValidUrl(url) {
    try {
        const parsedUrl = new URL(url);
        const allowlist = ["site1", "site2"];
        if (parsedUrl.protocol !== "https:") {
            return false;
        }
        const allowedPaths = ["/path1", "/path2"];
        if (!allowedPaths.includes(parsedUrl.pathname)) {
            return false;
        }
        if (!allowlist.includes(parsedUrl.hostname)) {
            return false;
        }

        // Ajoutez d'autres vérifications au besoin

        return true;
    } catch (error) {
        return false;
    }
}

app.listen(3000);