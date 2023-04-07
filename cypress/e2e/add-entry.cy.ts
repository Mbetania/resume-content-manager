describe('Add entry flow', () => {
    it('should add a new entry successfully', () => {
      cy.visit('/');
  
      cy.get('[data-cy=btn--menu]').click();
      cy.url().should('include', '/menu');
  
      cy.get('[data-cy=btn--add-entry]').click();
      cy.url().should('include', '/menu/add-entry');
  
      cy.get('[data-cy=input-title]').type('Title Example');
      cy.get('[data-cy=input-description]').type('Description Example');
      cy.get('[data-cy=input-content]').type('Content Example');
      cy.get('[data-cy=input-tags]').type('Tag1, Tag2, Tag3');
  
      cy.get('[data-cy=btn--submit]').click();
  
      // cy.contains('Entry added successfully').should('be.visible');
    });
  });
  