import mongoose from 'mongoose';

const subTodeSchema = new mongoose.Schema({}, { timestamps: true });

export const todo = mongoose.model('Todo', subTodeSchema);
