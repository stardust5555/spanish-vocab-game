describe('Testing all the images are visible, and Town Map heading is displayed on homepage', () => {
  it('Ensures the correct elements are displayed on the homepage', () => {
    cy.visit('https://spanish-vocab-game.netlify.app/')
    
    //Town Map Heading
    cy.contains('Town Map')
    
    //Images are visible
    // cy.get('[alt="town map"]').should('be.visible')
    cy.get('[alt="school"]').should('be.visible')
    cy.get('[alt="barn"]').should('be.visible')
    cy.get('[alt="clothes shop"]').should('be.visible')
    cy.get('[alt="supermarket"]').should('be.visible')

  })
})

describe('Navigating from the map to the places and back to the map', () => {
  it('Clicking the links', () => {
    cy.visit('localhost:3000')

    // //Ensures links to the places on the town map exist
    // cy.url().should('include', '/school')
    // cy.url().should('include', '/supermarket')
    // cy.url().should('include', '/clothesShop')
    // cy.url().should('include', '/farm')

    //Navigate to school page and back to the map - Ensures the school page links back to the home page
    cy.get('[alt="school"]').click()
    cy.url().should('include', '/')
    cy.get('[id^=homepage]').click()
    
    //Navigate to supermarket page and back to the map - Ensures the school page links back to the home page
    cy.get('[alt="supermarket"]').click()
    cy.url().should('include', '/')
    cy.get('[id^=homepage]').click()

    //Navigate to clothes shop page and back to the map - Ensures the school page links back to the home page
    cy.get('[alt="clothes shop"]').click()
    cy.url().should('include', '/')
    cy.get('[id^=homepage]').click()

    //Navigate to farm page and back to the map - Ensures the school page links back to the home page
    cy.get('[alt="barn"]').click()
    cy.url().should('include', '/')
    cy.get('[id^=homepage]').click()
    
  })
})