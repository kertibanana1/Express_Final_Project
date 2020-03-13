"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepairModel {
    constructor() {
        this.dbName = 'Repairs';
    }
    get(db) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'Repairs.Cloth_clothId');
    }
    sumByClothId(db, clothId) {
        return db(this.dbName)
            .sum('repairAmount as amount')
            .where('Cloth_clothId', clothId);
    }
    getByClothId(db, clothId) {
        return db(this.dbName)
            .innerJoin('Cloth', 'Cloth.clothId', 'Repairs.Cloth_clothId')
            .where('Cloth_clothId', clothId)
            .orderBy('id', 'desc');
    }
    insert(db, data) {
        return db(this.dbName)
            .insert(data);
    }
}
exports.RepairModel = RepairModel;
//# sourceMappingURL=repair.js.map