import axios from 'axios';
import parser from 'fast-html-parser';

export default  (req, res)=> {
    axios.get('https://www.youtube.com/watch?v=xjX_-VjsUfU&list=PLPgDBCA1Cb3Ngjpo21aFkdqVT2H0fZu3W').then((res)=> {
        console.log(res.data);
        res.status(200).end('s');
    });

}