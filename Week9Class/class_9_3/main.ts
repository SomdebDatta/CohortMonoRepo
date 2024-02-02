const express = require('express')

const app = express()

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}


interface Query {
    userId: string
}

interface Request {
    query: Query
}

app.get('/', (req: Request, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})