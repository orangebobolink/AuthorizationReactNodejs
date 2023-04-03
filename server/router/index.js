const Router = require('express');
const userController = require('../controllers/user-controller');
const productController = require('../controllers/product-controller');
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middlewares');

const router = new Router();

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/product/create',
    authMiddleware,
    body('name').isLength({min: 2, max: 30}),
    body('price').isFloat(),
    body('description').isLength({min: 3, max: 100}),

    productController.create);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.put('/product/update/:id',
    authMiddleware,
    body('name').isLength({min: 2, max: 30}),
    body('price').isFloat(),
    body('description').isLength({min: 3, max: 100}),
    productController.update);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/product/get/:id', productController.getProductById);
router.get('/product/get', authMiddleware, productController.getProducts);
router.delete('/product/delete/:id', authMiddleware, productController.delete);

module.exports = router;
