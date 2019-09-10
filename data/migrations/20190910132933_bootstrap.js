// changes we want to make
exports.up = function(knex) {
                                // table called fruits
    return knex.schema.createTable('fruits', tbl => {
        // id: pk, autoincrement, integer
        tbl.increments();
        // name: string up to 128, unique, required (not null)
        tbl.string('name', 128).unique().notNullable();
        // avgWeight: dec, oz
        tbl.decimal('avgWeightOz');
        // delicious: boolean
        tbl.boolean('delicious');
    })

};

// changes we want to revert
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
