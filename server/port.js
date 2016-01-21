export default function () {
    console.log(process.env.NODE_ENV);
    //var port = process.env.NODE_ENV == 'production' ? 80 : 3001;
    var port = process.env.NODE_ENV == 'production' ? 80 : 80;

    return process.env.PORT || port;
}()
