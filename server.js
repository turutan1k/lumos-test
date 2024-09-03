/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable no-console */
const { createServer } = require("node:http")
const { parse } = require("node:url")
const next = require("next")

const development = process.env.NODE_ENV !== "production"
const hostname = "127.0.0.1"
const port = 3000

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev: development, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() =>
    createServer(async (request, response) => {
        try {
            const parsedUrl = parse(request.url, true)
            await handle(request, response, parsedUrl)
        } catch (error) {
            console.error("Error occurred handling", request.url, error)
            response.statusCode = 500
            response.end("internal server error")
        }
    })
        .once("error", (error) => {
            console.error(error)
        })
        .listen(port, () => {
            console.log(
                `> Ready on http://${hostname}:${port} in ${process.env.NODE_ENV} mode`
            )
        })
)
