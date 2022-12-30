import { rest } from "msw";
import data from '../db/data.json'

export const handlers = [
    // 데이터 조회
    rest.get('/product', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
    })
]