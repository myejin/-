const router = require('express').Router();
const Meta = require('../models/meta');
const scraper = require('html-metadata');

router.post('/metadata', async (req, res) => {
    const options = {
        url: req.body.url,
        jar: require('request').jar(),
        headers: {
            'User-Agent': 'webscraper',
        },
    };
    await scraper(options, (error, metadata) => {
        if (error) {
            console.error('Scraper Error : ', error);
        }
        const data = new Meta(metadata.openGraph);
        data.save(() => {
            res.status(201).send(data);
        });
    });
});

router.get('/metadatas', async (req, res) => {
    try {
        const docs = await Meta.find({});
        await res.status(200).send(docs);
    } catch (err) {
        console.error('err occurred : ', err);
    }
});

module.exports = router;