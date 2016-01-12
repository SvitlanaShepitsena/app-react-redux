import axios from 'axios';
import parser from 'fast-html-parser';
import cheerio from 'cheerio';
import cheerio from 'cheerio';



export default  (req, res)=> {
    axios.get('https://www.youtube.com/watch?v=DKUimZvRyqg&list=PLPgDBCA1Cb3NXTI0Ceqpw3GqXBrv7rjld').then((result)=> {
        let html = result.data;
        let $ = cheerio.load(html);
        const videos = $('#playlist-autoscroll-list');
        console.log(videos);


        res.end('success');

    });

}