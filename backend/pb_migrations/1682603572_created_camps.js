migrate((db) => {
  const collection = new Collection({
    "id": "pwqqzex51dyknq3",
    "created": "2023-04-27 13:52:52.854Z",
    "updated": "2023-04-27 13:52:52.854Z",
    "name": "camps",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gbq3z8eb",
        "name": "campers",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "4ldbcdzw124pxc3",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "xmnpxlbm",
        "name": "camp_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("pwqqzex51dyknq3");

  return dao.deleteCollection(collection);
})
