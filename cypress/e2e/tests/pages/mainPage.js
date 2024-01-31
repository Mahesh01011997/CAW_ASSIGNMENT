class htmlTable {
  tableData() {
    return cy.get("details>summary");
  }
  tableDataInput() {
    return cy.get('[id="jsondata"]');
  }
  refreshTableBtn() {
    return cy.get('[id="refreshtable"]');
  }
  getTableData(){
     return cy.get('[id="dynamictable"]>tr');
  }
}
module.exports = new htmlTable();
