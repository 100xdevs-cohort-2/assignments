"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareDocs = exports.indexInformation = void 0;
async function indexInformation(db, name, options) {
    if (options == null) {
        options = {};
    }
    // If we specified full information
    const full = options.full == null ? false : options.full;
    // Get the list of indexes of the specified collection
    const indexes = await db.collection(name).listIndexes(options).toArray();
    if (full)
        return indexes;
    const info = {};
    for (const index of indexes) {
        info[index.name] = Object.entries(index.key);
    }
    return info;
}
exports.indexInformation = indexInformation;
function prepareDocs(coll, docs, options) {
    const forceServerObjectId = typeof options.forceServerObjectId === 'boolean'
        ? options.forceServerObjectId
        : coll.s.db.options?.forceServerObjectId;
    // no need to modify the docs if server sets the ObjectId
    if (forceServerObjectId === true) {
        return docs;
    }
    return docs.map(doc => {
        if (doc._id == null) {
            doc._id = coll.s.pkFactory.createPk();
        }
        return doc;
    });
}
exports.prepareDocs = prepareDocs;
//# sourceMappingURL=common_functions.js.map