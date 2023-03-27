class widgetsPage{

    //Objects/Elements

    elements = {
        //Progress Bar Sub Menu
        startProgressBarBtn: () => cy.get(`#startStopButton`),
        progressBar: () => cy.get(`#progressBar > div`),
        
        //Tool Tips Sub Menu
        hoverMeToSee: () => cy.get(`#toolTipButton`),
        hoverMeToSeeToolTipMessage: () => cy.get(`#buttonToolTip div`)
    }

    //Actions

    clickStart(){
        this.elements.startProgressBarBtn().click();
    }

}

module.exports = new widgetsPage();