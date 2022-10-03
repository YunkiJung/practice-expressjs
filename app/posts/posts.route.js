import { Router } from "express";

const router = Router();

const data = {
    id: '001',
    title: 'Node js server programming',
    year: '2022',
    writer: 'yunki'
}

router.get('/posts', (req, res, next) => {
    res.json(data);
});


export default router;