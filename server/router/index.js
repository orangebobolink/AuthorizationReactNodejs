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
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

router.use(authMiddleware);

router.post('/product',
    body('name').isLength({min: 2, max: 30}),
    body('price').isFloat(),
    body('description').isLength({min: 3, max: 100}),
    productController.create);
router.get('/product', productController.getProducts);
router.get('/product:id', productController.getProductById);
router.put('/product',
    body('name').isLength({min: 2, max: 30}),
    body('price').isFloat(),
    body('description').isLength({min: 3, max: 100}),
    productController.update);
router.delete('/product/:id', productController.delete);

module.exports = router;
