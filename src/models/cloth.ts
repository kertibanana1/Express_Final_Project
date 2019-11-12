import * as Knex from 'knex';

export class ClothModel {
  dbName = 'Cloth';

  get(db: Knex) {
    return db(this.dbName);
  }

  update(db: Knex, data) {
    return db(this.dbName)
      .update(data)
      .where('clothId', data.clothId)
  }

  insert(db: Knex, data) {
    return db(this.dbName)
      .insert(data)
  }

  getStock(db: Knex) {
     return db(this.dbName)
     .innerJoin ( 'ClothType' , 'Cloth.ClothType_clothTypeId'  , 'ClothType.clothTypeId')
     .orderBy('clothId', 'ascs');
    //  .select(
    //   'cloth.cName', 
    //   'cTypeId.cTypeName'
    //   );

  }

  getSearch(db: Knex, search) {
    return db(this.dbName)
    .innerJoin('ClothType', 'Cloth.ClothType_clothTypeId', 'ClothType.clothTypeId')
    .where('Cloth.clothName',"like","%"+search+"%");
  }

}