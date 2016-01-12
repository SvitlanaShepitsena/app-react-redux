import axios from 'axios';
import parser from 'fast-html-parser';

export default  (req, res)=> {
    axios.get('http://www.screencast.com/users/SvitlanaShepitsena/folders/Reactjs').then((result)=> {
        let html = result.data;

    });

}