class elementsPage{

    //OBJECTS/ELEMENTS

    elements = {
        //Web Tables Section
        addBtnWebTablesBtn: () => cy.get(`#addNewRecordButton`),
        firstNameWebTablesInput: () => cy.get(`#firstName`),
        lastNameWebTablesInput: () => cy.get(`#lastName`),
        emailWebTablesInput: () => cy.get(`#userEmail`),
        ageWebTablesInput: () => cy.get(`#age`),
        salaryWebTablesInput: () => cy.get(`#salary`),
        departmentWebTablesInput: () => cy.get(`#department`),
        submitWebTablesBtn: () => cy.get(`#submit`),
        verifyAddedWebTables: (firstName, lastName, age, email, salary, department) => cy.get(`div[class*="rt-tr "] > div:contains('${firstName}') + div:contains('${lastName}') + div:contains('${age}') + div:contains('${email}') + div:contains('${salary}') + div:contains('${department}')`),
        editIconWebTables: (firstName, lastName, age, email, salary, department) => cy.get(`div[class*="rt-tr "] > div:contains('${firstName}') + div:contains('${lastName}') + div:contains('${age}') + div:contains('${email}') + div:contains('${salary}') + div:contains('${department}') + div span[title="Edit"] > svg`),
        
        //Broken Links - Images Section
        brokenImageWebTablesImage: () => cy.get(`img[src="/images/Toolsqa_1.jpg"]`),
    }

    //ACTIONS

    clickAdd(){
        this.elements.addBtnWebTablesBtn().click();
    }

    typeFirstName(firstName){
        this.elements.firstNameWebTablesInput().clear().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNameWebTablesInput().clear().type(lastName);
    }

    typeEmail(email){
        this.elements.emailWebTablesInput().type(email);
    }

    typeAge(age){
        this.elements.ageWebTablesInput().type(age);
    }

    typeSalary(salary){
        this.elements.salaryWebTablesInput().type(salary);
    }

    typeDepartment(department){
        this.elements.departmentWebTablesInput().type(department);
    }

    clickSubmit(){
        this.elements.submitWebTablesBtn().click();
    }
}

module.exports = new elementsPage();