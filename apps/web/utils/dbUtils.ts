// dbUtils.ts

import { Collection, ObjectId } from 'mongodb';

// Find a document by ID
export async function findById(collection: Collection, id: string): Promise<any> {
    return await collection.findOne({ _id: new ObjectId(id) });
}

// Find a document by email
export async function findByEmail(collection: Collection, email: string): Promise<any> {
    return await collection.findOne({ email });
}
