///<reference types ="cypress"/>
const htmlpage = require("../pages/mainPage");

describe("validate table data", () => {
  before(() => {
    cy.navigateToTable();
  });
  it("test to validate table data", () => {
    htmlpage.tableData().click();
    cy.fixture("example").then((data) => {
      data.forEach((userdata) => {
        htmlpage.tableDataInput().clear();
        htmlpage
          .tableDataInput()
          .type(
            `[{"name":"${userdata.name}","age":${userdata.age},"gender":"${userdata.gender}"}]`,
            { parseSpecialCharSequences: false }
          );
        htmlpage.refreshTableBtn().click();
        //Assertion 
        htmlpage
          .getTableData()
          .last()
          .within(() => {
            cy.get("td").eq(0).should("have.text", userdata.name);
            cy.get("td").eq(1).should("have.text", String(userdata.age));
            cy.get("td").eq(2).should("have.text", userdata.gender);
          });
      });
    });
  });
});

