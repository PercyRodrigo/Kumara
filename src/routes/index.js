const express = require('express');
const router = express.Router();

const products = [{
    id: '1',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '2',
    name: 'Yogurt Gloria de Lucuma',
    price: '2.00'
},{
    id: '3',
    name: 'Yogurt Gloria de Maracuya',
    price: '2.00'
},{
    id: '4',
    name: 'Yogurt Gloria de Mango',
    price: '2.00'
},{
    id: '5',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '6',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '7',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '8',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '9',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '10',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '11',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '12',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '13',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
},{
    id: '14',
    name: 'Yogurt Gloria de Fresa',
    price: '2.00'
}]

router.get('/', (req, res) => {
    tittle = `Yogurt K'umara`;
    res.render('links/home', {tittle});
});
router.get('/Home', (req, res) => {
    tittle = `Inicio - Yogurt K'umara`;
    res.render('links/home', {tittle});
});
router.get('/About_Us', (req, res) => {
    tittle = `Nosotros - Yogurt K'umara`;
    res.render('links/about_us', {tittle});
});
router.get('/Products', (req, res) => {
    tittle = `Todos los Productos - Yogurt K'umara`;
    res.render('links/products', { products, tittle });
});
router.get('/Products/:id', (req, res) => {
    tittle = `Yogurt K'umara - ${products.name}`;
    res.render('links/OneProduct', { product: products[0], tittle });
});

module.exports = router;