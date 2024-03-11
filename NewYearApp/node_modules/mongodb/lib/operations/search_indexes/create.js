"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSearchIndexesOperation = void 0;
const operation_1 = require("../operation");
/** @internal */
class CreateSearchIndexesOperation extends operation_1.AbstractOperation {
    constructor(collection, descriptions) {
        super();
        this.collection = collection;
        this.descriptions = descriptions;
    }
    async execute(server, session) {
        const namespace = this.collection.fullNamespace;
        const command = {
            createSearchIndexes: namespace.collection,
            indexes: this.descriptions
        };
        const res = await server.commandAsync(namespace, command, { session });
        const indexesCreated = res?.indexesCreated ?? [];
        return indexesCreated.map(({ name }) => name);
    }
}
exports.CreateSearchIndexesOperation = CreateSearchIndexesOperation;
//# sourceMappingURL=create.js.map