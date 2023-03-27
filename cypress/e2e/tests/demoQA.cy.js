/// <reference types="cypress" />

import elementsPage from "../pages/elements"
import homePage from "../pages/home"
import formsPage from "../pages/forms"
import widgetsPage from "../pages/widgets"
import interactionsPage from "../pages/interactions"

//Example use only of Fixture
const exampleFixture = require('../../fixtures/example.json');

describe("Demo QA", { tags: '@smoke' }, () => {
  beforeEach(function () {
    if (this.currentTest._testConfig.unverifiedTestConfig.skipBeforeEach) {
      cy.log('skipping beforeEach hook')
      return
    }
    cy.visit("https://demoqa.com/")
  })

  it("TC01- Scenario A - Verify user can enter new data into the table", () => {
    homePage.clickMenuOption("Elements");
    homePage.clickMenuOption("Web Tables");
    elementsPage.clickAdd();
    elementsPage.typeFirstName(exampleFixture.exampleUser.firstName);
    elementsPage.typeLastName(exampleFixture.exampleUser.lastName);
    elementsPage.typeAge("30");
    elementsPage.typeEmail("test@test.com");
    elementsPage.typeSalary("12345");
    elementsPage.typeDepartment("QA");
    elementsPage.clickSubmit();
    elementsPage.elements.verifyAddedWebTables("Alden", "Cantrell", "30", "test@test.com", "12345", "QA")
      .should("be.visible");
  })

  it("TC01- Scenario B - Verify user can edit the row in a table", {skipBeforeEach: true}, () => {
    elementsPage.elements.editIconWebTables("Alden", "Cantrell", "45", "alden@example.com", "12000", "Compliance").click();
    elementsPage.typeFirstName("Gerimedica");
    elementsPage.typeLastName("BV");
    elementsPage.clickSubmit();
    elementsPage.elements.verifyAddedWebTables("Gerimedica", "BV", "45", "alden@example.com", "12000", "Compliance")
      .should("be.visible");
  })

  it("TC02 - Verify broken image", {skipBeforeEach: true}, () => {
    homePage.clickMenuOption("Broken Links - Images");
    elementsPage.elements.brokenImageWebTablesImage()
      .should('be.visible')
      .and($img => expect($img[0].naturalWidth).to.be.equal(0));
  })

  it("TC03 - Verify user can submit the form", {skipBeforeEach: true}, () => {
    homePage.clickMenuOption("Forms");
    homePage.clickMenuOption("Practice Forms");
    formsPage.typeFirstName("Gerimedica");
    formsPage.typeLastName("BV");
    formsPage.typeEmail("test@test.com");
    formsPage.clickGender("Male");
    formsPage.typeMobile("0123456789");
    formsPage.typeDateOfBirth("15 Jan 1990");
    formsPage.typeSubjects("Physics");
    formsPage.clickHobbies("Reading");
    formsPage.attachPicture();
    formsPage.typeCurrentAddress("Netherlands");
    formsPage.typeState("NCR");
    formsPage.typeCity("Delhi");
    formsPage.clickSubmit();
    formsPage.elements.submittedFormMessage().should("have.text", "Thanks for submitting the form");
    formsPage.clickCloseSubmittedFormMessage();
  })

  it("TC04 - Verify the progress bar", {skipBeforeEach: true}, () => {
    homePage.clickMenuOption("Widgets");
    homePage.clickMenuOption("Progress Bar");
    widgetsPage.clickStart();
    widgetsPage.elements.progressBar()
      .should("have.text", "100%")
      .should("have.css", "background-color")
      .and("eq", "rgb(40, 167, 69)");
  })

  it("TC05 - Verify the tooltip", {skipBeforeEach: true}, () => {
    homePage.clickMenuOption("Tool Tips");
    widgetsPage.elements.hoverMeToSee().trigger('mouseover');
    widgetsPage.elements.hoverMeToSeeToolTipMessage()
      .should("have.text", "You hovered over the Button")
  })

  it("TC06 - Verify user can drag and drop", {skipBeforeEach: true}, () => {
    homePage.clickMenuOption("Interactions");
    homePage.clickMenuOption("Droppable");
    interactionsPage.dragMe();
    interactionsPage.elements.droppable().should("have.text", "Dropped!")
  })
  
})
