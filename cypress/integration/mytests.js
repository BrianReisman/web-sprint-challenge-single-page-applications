describe('test', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })

  it('sanity check', ()=>{
    cy.get('button').click()
  })


})