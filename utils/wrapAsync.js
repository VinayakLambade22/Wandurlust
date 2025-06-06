// module.exports = (fn) => {
//     return (req, res, next) => {
//         fn(req, res, next).catch(next);
//     };
// };

// utils/wrapAsync.js

module.exports.wrapAsync = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
};
