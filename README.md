# rethinkdb-createtables

A helper method to create one or more RethinkDB tables.

* If a table is not present, creates it
* If a table is present, does nothing

## Installation

```
npm install rethinkdb-createtables
```

## Usage

```js
import createTables from "rethinkdb-createtables";
createTables(connection, "db_name", [ "table1", ... ]).then(() => ...);
```

## License

MIT
