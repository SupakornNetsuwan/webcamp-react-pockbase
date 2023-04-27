migrate((db) => {
  const collection = new Collection({
    "id": "4ldbcdzw124pxc3",
    "created": "2023-04-27 12:59:12.286Z",
    "updated": "2023-04-27 12:59:12.286Z",
    "name": "campers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "csnpkxun",
        "name": "rich_text_editor",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4ldbcdzw124pxc3");

  return dao.deleteCollection(collection);
})
