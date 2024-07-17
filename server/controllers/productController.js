import { createProduct, getProductById, getProducts, updateProductById, deleteProductById, searchProductsByName} from '../models/Product.js';

const create = async (req, res) => {
    try {
        const product = await createProduct(req.user.id, req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFilteredProducts = async (req, res) => {
    try {
        // Get categories from query parameters
        const { categories } = req.query;

        // Convert categories to an array if comma-separated string
        const filter = {
            categories: categories ? categories.split(',') : []
        };

        const products = await getProducts(filter);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

const getProductByName = async (req, res) => {
    try {
        const products = await searchProductsByName(req.query.name);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await updateProductById(req.params.id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await deleteProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export { create, getProduct, getFilteredProducts, updateProduct, deleteProduct, getProductByName };
