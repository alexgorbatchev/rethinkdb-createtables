import * as r from "rethinkdb";
import insureTable from "rethinkdb-insuretable";

export default function createTables(connection: r.Connection, db: string, tables: string[]): Promise<void> {
  return Promise
    .all(tables.map(table => insureTable(connection, db, table)))
    .then(() => Promise.resolve())
    ;
}
