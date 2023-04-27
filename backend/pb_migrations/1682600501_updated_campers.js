migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ldbcdzw124pxc3")

  // remove
  collection.schema.removeField("csnpkxun")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gazj9ysk",
    "name": "firstname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnbbn5tp",
    "name": "lastname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rpme68h7",
    "name": "birthdate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ajhbvafo",
    "name": "grade",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "GRADE4",
        "GRADE5",
        "GRADE6"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ldbcdzw124pxc3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "csnpkxun",
    "name": "rich_text_editor",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("gazj9ysk")

  // remove
  collection.schema.removeField("jnbbn5tp")

  // remove
  collection.schema.removeField("rpme68h7")

  // remove
  collection.schema.removeField("ajhbvafo")

  return dao.saveCollection(collection)
})
