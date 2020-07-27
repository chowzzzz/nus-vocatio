const multer = require("multer");

const fileFilter = function (req, file, cb) {
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/msword",
        "application/application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Wrong file type");
        error.code = "LIMIT_FILE_TYPES";
        return cb(error, false);
    }

    cb(null, true);
};

const MAX_SIZE = 100000000;

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/assets/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
    }
});

var upload = multer({
    storage: storage,
    fileFilter,
    limits: {
        fileSize: MAX_SIZE
    }
});

module.exports = upload;
