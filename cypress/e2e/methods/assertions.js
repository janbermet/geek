



describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.contains('Admin').click()

        cy.get("oxd-input oxd-input--active").click()

        cy.get('.oxd-select-text-input')

            .eq(0)
            .click()
            .get('.oxd-select-option')
            .contains('Admin')
            .click()






    });
});














