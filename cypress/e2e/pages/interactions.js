class interactionsPage{

    //Objects/Elements

    elements = {
        //Progress Bar Sub Menu
        dragme: () => cy.get(`#draggable`),
        droppable: () => cy.get(`#draggable + #droppable > p`),
    }

    //Actions

    dragMe(){
        this.elements.dragme().drag('#droppable', { force: true });
    }

}

module.exports = new interactionsPage();