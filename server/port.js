export default function () {
    console.log(process.env.NODE_ENV);
    var port = process.env.NODE_ENV == 'production' ? 80 : 3001;
    console.log(port);

    return process.env.PORT || port;
}()
