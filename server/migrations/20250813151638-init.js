import mongoose from 'mongoose';
import brandModel from '../models/brandModel.js';
import categoryModel from '../models/categoryModel.js';
import productModel from '../models/productModel.js';
import userModel from '../models/userModel.js';
import orderModel from '../models/orderModel.js';
import contactModel from '../models/contactModel.js';

export const up = async (db, client) => {
    // Helper to create collection and indexes from model
    const createFromModel = async (model, collectionName) => {
        await db.createCollection(collectionName);
        const indexes = model.schema.indexes();
        for (const [fields, options] of indexes) {
            await db.collection(collectionName).createIndex(fields, options);
        }
        // Also create unique indexes from schema paths
        Object.entries(model.schema.paths).forEach(([key, path]) => {
            if (path.options && path.options.unique) {
                db.collection(collectionName).createIndex({ [key]: 1 }, { unique: true });
            }
        });
    };

    await createFromModel(brandModel, 'brands');
    await createFromModel(categoryModel, 'categories');
    await createFromModel(productModel, 'products');
    await createFromModel(userModel, 'users');
    await createFromModel(orderModel, 'orders');
    await createFromModel(contactModel, 'contacts');
};

export const down = async (db, client) => {
    await db.collection('brands').drop();
    await db.collection('categories').drop();
    await db.collection('products').drop();
    await db.collection('users').drop();
    await db.collection('orders').drop();
    await db.collection('contacts').drop();
};
