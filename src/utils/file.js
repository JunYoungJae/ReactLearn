const multer = require('multer');
//=================================
//             User
//=================================

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log('file', file);
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
   
var upload = multer({ storage: storage }).single('file');

const uploadImage = (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res = { success: false, err };
        }

        return res = { success: true, filePath: res.req.file.path, fileName: res.req.file.fieldname};
    })
};

module.exports = { uploadImage };