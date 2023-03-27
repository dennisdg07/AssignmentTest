import {menuOptions} from './enums';

class homePage{

    elements = {
        //HOME MENU(MENU IN THE LANDING PAGE)
        elementsHomeMenuBtn: () => cy.get(`h5:contains('Elements')`),

        //PAGE MENU(MENU IN THE LEFT SIDE)
        webTablesSideMenuBtn: () => cy.get(`span:contains("Web Tables")`),
        brokenLinksImagesWebTablesSideMenuBtn: () => cy.get(`span:contains("Broken Links - Images")`),
        formsSideMenuBtn: () => cy.get(`span:contains("Forms")`),
        practiceFormFormsSideMenuBtn: () => cy.get(`span:contains("Practice Form")`),
        widgetsSideMenuBtn: () => cy.get(`span:contains("Widgets")`),
        progressBarWidgetsSideMenuBtn: () => cy.get(`span:contains("Progress Bar")`),
        toolTipsWidgetsSideMenuBtn: () => cy.get(`span:contains("Tool Tips")`),
        interactionsTipsWidgetsSideMenuBtn: () => cy.get(`span:contains("Interactions")`),
        droppableInteractionsSideMenuBtn: () => cy.get(`span:contains("Droppable")`)
    }

    clickMenuOption(menuOption){
        switch(menuOption) {
            case menuOptions.Elements:
                this.elements.elementsHomeMenuBtn().click();
                break;
            case menuOptions.WebTables:
                this.elements.webTablesSideMenuBtn().click();
                break;
            case menuOptions.BrokenLinksImages:
                this.elements.brokenLinksImagesWebTablesSideMenuBtn().click();
                break;
            case menuOptions.Forms:
                this.elements.formsSideMenuBtn().click();
                break;
            case menuOptions.PracticeForm:
                this.elements.practiceFormFormsSideMenuBtn().click();
                break;
            case menuOptions.Widgets:
                this.elements.widgetsSideMenuBtn().click();
                break;
            case menuOptions.ProgressBar:
                this.elements.progressBarWidgetsSideMenuBtn().click();
                break;
            case menuOptions.ToolTips:
                this.elements.toolTipsWidgetsSideMenuBtn().click();
                break;
            case menuOptions.Interactions:
                this.elements.interactionsTipsWidgetsSideMenuBtn().click();
                break;
            case menuOptions.Droppable:
                this.elements.droppableInteractionsSideMenuBtn().click();
                break;
          }
    }
}

module.exports = new homePage();