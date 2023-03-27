import {hobbiesPracticeForms} from './enums';

class formsPage{

    //Objects/Elements

    elements = {
        //Practice Form Sub Menu
        firstNamePracticeFormInput: () => cy.get(`#firstName`),
        lastNamePracticeFormInput: () => cy.get(`#lastName`),
        emailPracticeFormInput: () => cy.get(`#userEmail`),
        genderMalePracticeFormRbtn: () => cy.get(`#gender-radio-1 + label`),
        genderFemalePracticeFormRbtn: () => cy.get(`#gender-radio-2 + label`),
        genderOtherPracticeFormRbtn: () => cy.get(`#gender-radio-3 + label`),
        mobilePracticeFormInput: () => cy.get(`#userNumber`),
        dateOfBirthPracticeFormInput: () => cy.get(`#dateOfBirthInput`),
        subjectsPracticeFormInput: () => cy.get(`div[class*="subjects-auto-complete__value-container"]`),
        hobbiesSportsPracticeFormCbx: () => cy.get(`#hobbies-checkbox-1 + label`),
        hobbiesReadingPracticeFormCbx: () => cy.get(`#hobbies-checkbox-2 + label`),
        hobbiesMusicPracticeFormCbx: () => cy.get(`#hobbies-checkbox-3 + label`),
        selectPicturePracticeFormBtn: () => cy.get(`#uploadPicture`),
        currentAddressPracticeFormInput: () => cy.get(`#currentAddress`),
        statePracticeFormSelect: () => cy.get(`#state div[class*="placeholder"]`),
        cityPracticeFormSelect: () => cy.get(`#city div[class*="placeholder"]`),
        submitPracticeFormBtn: () => cy.get(`#submit`),
        submittedFormMessage: () => cy.get(`#example-modal-sizes-title-lg`),
        closeSubmittedFormMessageBtn: () => cy.get(`#closeLargeModal`)
    }

    //Actions

    typeFirstName(firstName){
        this.elements.firstNamePracticeFormInput().clear().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNamePracticeFormInput().clear().type(lastName);
    }

    typeEmail(email){
        this.elements.emailPracticeFormInput().type(email);
    }

    clickGender(gender){
        switch(gender){
            case "Male":
                this.elements.genderMalePracticeFormRbtn().click();
                break;
            case "Female":
                this.elements.genderFemalePracticeFormRbtn().click();
                break;
            case "Other":
                this.elements.genderOtherPracticeFormRbtn().click();
                break;
        }
    }

    typeMobile(mobile){
        this.elements.mobilePracticeFormInput().type(mobile);
    }

    typeDateOfBirth(dateOfBirth){
        this.elements.dateOfBirthPracticeFormInput().type('{selectAll}' + dateOfBirth);
    }

    typeSubjects(subjects){
        this.elements.subjectsPracticeFormInput().type(subjects + '{enter}');
    }

    clickHobbies(hobbies){
        switch(hobbies){
            case hobbiesPracticeForms.Sports:
                this.elements.hobbiesSportsPracticeFormCbx().click();
                break;
            case hobbiesPracticeForms.Reading:
                this.elements.hobbiesReadingPracticeFormCbx().click();
                break;
            case hobbiesPracticeForms.Music:
                this.elements.hobbiesMusicPracticeFormCbx().click();
                break;
        }
    }

    attachPicture(){
        this.elements.selectPicturePracticeFormBtn().attachFile("TC03Picture.jpg");
    }

    typeCurrentAddress(currentAddress){
        this.elements.currentAddressPracticeFormInput().type(currentAddress);
    }

    typeState(state){
        this.elements.statePracticeFormSelect().type(state + '{enter}');
    }

    typeCity(city){
        this.elements.cityPracticeFormSelect().type(city + '{enter}');
    }

    clickSubmit(){
        this.elements.submitPracticeFormBtn().click();
    }

    clickCloseSubmittedFormMessage(){
        this.elements.closeSubmittedFormMessageBtn().click();
    }
}

module.exports = new formsPage();