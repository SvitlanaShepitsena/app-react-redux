import axios from 'axios';
import parser from 'fast-html-parser';
import  cheerio from 'cheerio';
import select from 'cheerio-select';

export default  (req, res)=> {
    axios.get('https://www.youtube.com/watch?v=DKUimZvRyqg&list=PLPgDBCA1Cb3NXTI0Ceqpw3GqXBrv7rjld').then((result)=> {
        let html = result.data;
        let $ = cheerio.load(html);
        var list = [];
        $('#playlist-autoscroll-list').find('li a').each(function (i, elem) {
            let el = $(elem).attr('href').split('=')[1].split('&')[0];
            list.push(el);
        });


        res.json(list);

    }).catch((error)=> {
        console.log(error);
    });

}