import { expect } from "chai";
import * as r from "rethinkdb";
import createTables from "../src";

const DB = "rethinkdb_createtables_test_db";
const TABLES = [ "table1", "table2" ];

describe("rethinkdb-insuretable", () => {
  let connection: r.Connection;

  before(() =>
    r.connect({ host: "localhost", port: 28015 })
      .then(actual => connection = actual)
      .then(() => r.dbCreate(DB).run(connection))
  );

  it("does not have any tables", () =>
    r.db(DB).tableList().run(connection).then((tables: string[]) => expect(tables.length).to.equal(0))
  );

  it("creates tables", () => createTables(connection, DB, TABLES));

  it("has the tables", () =>
    r.db(DB).tableList().run(connection)
      .then((tables: string[]) => expect(tables.sort().join("|")).to.equal(TABLES.join("|")))
  );
});
