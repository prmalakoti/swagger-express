const products = require('../products')

module.exports = function (app) {

    /* get all products */
    app.get('/product-list', async (req, res) => {
        /*  #swagger.tags = ['Products'] */
        const { data } = await products.getProducts();
        res.status(200).send(data);
    })

    /* get single product */
    app.get('/product-list/:id', async (req, res) => {
        /*  #swagger.tags = ['Products'] */
        const { data } = await products.getProductById(req.params.id);
        res.status(200).send(data);
    })

    /* search products */
    app.get('/product-list-search', async (req, res) => {
        /*  #swagger.tags = ['Products'] */
        const { data } = await products.getProductByName(req.query.productName);
        res.status(200).send(data);
    })

    /* get product categories */
    app.get('/products/categories', async (req, res) => {
        /*  #swagger.tags = ['Products'] */
        const { data } = await products.getProductCategories();
        res.status(200).send(data);
    })

    /* add products */
    app.post('/add-product', async (req, res) => {
        /*  #swagger.tags = ['Products'] */
        /*  #swagger.parameters['obj'] = {
              in: 'body',
              description: 'Product information.',
              required: true
             
      } */
        const { data } = await products.addProduct(req.body);
        res.status(201).send(data);
    })

    /* put products */
    app.put('/update-product/:id', async (req, res) => {
        /*  #swagger.tags = ['Products'] */
        /*  #swagger.parameters['obj'] = {
             in: 'body',
             description: 'Product information.',
             required: true
     } */
        const { data } = await products.updateProduct(req.params.id, req.body);
        res.status(200).send(data);
    })

    /* patch products */
    app.patch('/product/:id', async (req, res) => {
        /*  #swagger.tags = ['Products'] */
        /*  #swagger.parameters['id'] = {
                in: 'path',
                description: 'product Id.',
                required: true
            }
        */
        /*  #swagger.parameters['obj'] = {
                in: 'query',
                description: 'Product information.',
                required: true, 
                type: 'string'
            }
        */
        console.log("req.params--------- ", req.query);
        const { data } = await products.patchProduct(req.params.id, req.query);
        res.status(200).send(data);
    })

    /* delete products */
    app.delete('/delete-product/:id', async (req, res) => {
        /*  #swagger.tags = ['Products'] */
        const { data } = await products.deleteProduct(req.params.id);
        res.status(200).send(data);
    })

    /* Head http method */
    app.head('/security', (req, res) => {
        if (req.query.obj > 1)
            return res.status(200).send(true)
        return res.status(404).send(false)
    })
}