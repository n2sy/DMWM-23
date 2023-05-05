exports.postAvatar = (req, res, next) => {
    console.log(req.file);
    let fileName = req.file.filename;
    res.status(200).json({
        'message': 'Image uploaded successfully',
        'fileName': fileName
    });
}