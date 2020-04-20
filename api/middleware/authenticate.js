const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // const Authheader_from_client =  'Bearer eyJraWQiOiJsbnBYakNOSHpad1RITzRzQ2N6dGRzd1U4TU5EZU5GalNySTVoaFVfSlpRIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlphUWVBX1VvcVpQT19DTmlLaEVhSl96OW5BZnR6QVVWOFdFX25zN2FsSFUiLCJpc3MiOiJodHRwczovL2Rldi04NjY1MDEub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTU1MzQ5NDI5MCwiZXhwIjoxNTUzNDk0NTkwLCJjaWQiOiIwb2FmejNmam96a3lucEpGTTBoNyIsInVpZCI6IjAwdWowNDQ5MnJNQk9WMUlzMGg3Iiwic2NwIjpbIm9wZW5pZCIsImVtYWlsIl0sInN1YiI6ImRlZXBhay5zYWhAd29vZG1hYy5jb20ifQ.auuUpfIjvjhIeXe43maLUeWOoZzU322O6RqiYd2VFFEVH5r2D2V1yUFOmQXATMrMzYvDuhmwAAHnEyJYKz4lNW0gaqoGP7zXf-u5dj9Z28nWH924NoCoYYsmmAOklVjEy-ajKZDjeNdinElw5vFp2BitsSGAKTI2FKgTPHsBaos1waSqmZnaihvRvNJLP3qcZoe5XyASKg0eTsv_RUVsgPWRJpphb3j4t2bXMmuOv3Fl4dcugzac-CCJqBN7CdDApZ0RWKWN-PeDCAhnrZtdQCCQvXJ4WN7cv8V_PWw-Br0czRe_eJDiR353puJAkunnlUP_C60XakqCb6smp8UxHg'
        // token_from_client = Authheader_from_client.split(" ")[1];
        // const token_of_authenticated_user =  'mytoeyJraWQiOiJsbnBYakNOSHpad1RITzRzQ2N6dGRzd1U4TU5EZU5GalNySTVoaFVfSlpRIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlphUWVBX1VvcVpQT19DTmlLaEVhSl96OW5BZnR6QVVWOFdFX25zN2FsSFUiLCJpc3MiOiJodHRwczovL2Rldi04NjY1MDEub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTU1MzQ5NDI5MCwiZXhwIjoxNTUzNDk0NTkwLCJjaWQiOiIwb2FmejNmam96a3lucEpGTTBoNyIsInVpZCI6IjAwdWowNDQ5MnJNQk9WMUlzMGg3Iiwic2NwIjpbIm9wZW5pZCIsImVtYWlsIl0sInN1YiI6ImRlZXBhay5zYWhAd29vZG1hYy5jb20ifQ.auuUpfIjvjhIeXe43maLUeWOoZzU322O6RqiYd2VFFEVH5r2D2V1yUFOmQXATMrMzYvDuhmwAAHnEyJYKz4lNW0gaqoGP7zXf-u5dj9Z28nWH924NoCoYYsmmAOklVjEy-ajKZDjeNdinElw5vFp2BitsSGAKTI2FKgTPHsBaos1waSqmZnaihvRvNJLP3qcZoe5XyASKg0eTsv_RUVsgPWRJpphb3j4t2bXMmuOv3Fl4dcugzac-CCJqBN7CdDApZ0RWKWN-PeDCAhnrZtdQCCQvXJ4WN7cv8V_PWw-Br0czRe_eJDiR353puJAkunnlUP_C60XakqCb6smp8UxHgken'
        // console.log('token_from_client value is : ', token_from_client)
        // const decoded = jwt.verify(token_from_client, token_of_authenticated_user);
        // console.log('decoded value is : ', decoded)
        // req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed',
            error: error
        });
    }
};