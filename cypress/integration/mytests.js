describe('test', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000/pizza')
  })
  it('sanity check', ()=>{
    cy.get(".name").click().type('test Name').should('have.value', 'test Name')
    cy.get('#Peppers').click().should('be.checked')
    cy.get('#Ham').click().should('be.checked')
    cy.get('#submit-btn').click()
  })
  it('after submit check form is clearerd', ()=>{
    cy.get(".name").should('be.empty')
    cy.get('#Peppers').should('not.be.checked')
    cy.get('#Ham').should('not.be.checked')
  })
})