import axios from 'axios';
import parser from 'fast-html-parser';
import cheerio from 'cheerio';



export default  (req, res)=> {
    axios.get('https://www.youtube.com/watch?v=xjX_-VjsUfU&list=PLPgDBCA1Cb3Ngjpo21aFkdqVT2H0fZu3W').then((result)=> {
        let html = result.data;
        let $ = cheerio.load(html);
        const videos = $('#playlist-autoscroll-list');
        console.log(videos);


        res.end('success');

    });

}