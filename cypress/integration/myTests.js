const name = () => cy.get('#name')
const size = () => cy.get('#size')
const top1 = () => cy.get('#pineapple')
const top2 = () => cy.get('#peppers')
const top3 = () => cy.get('#onions')
const top4 = () => cy.get('#chives')
const inst = () => cy.get('#instructions')
const subBtn = () => cy.get('button')
const homeBtn = () => cy.get('#homeBtn') //note really using functionally being tested is on form page

describe('I make tests!', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000/pizza')
  })
  // it('sanity check', ()=>{
  //   expect(2+2).to.equal(4);
  //   expect(2+2).to.not.equal(3);
  // })
  // it('role call', ()=>{
  //   name().should('exist')
  //   size().should('exist')
  //   top1().should('exist')
  //   top2().should('exist')
  //   top3().should('exist')
  //   inst().should('exist')
  //   subBtn().should('exist')
  // })
  // it('check for adding text to two boxes', ()=>{
  //   name().type('sup')
  //   inst().type('sup')
  // })
  // it('test that you can select multiple toppings', ()=>{
  // top1().click()
  // top2().click()
  // top4().click()
  // })
  it('test that you can submit the form', ()=>{
    name().type('Brian')
    size().select('12 inch')
    top1().click()
    top2().click()
    subBtn().click()
  })
}) //TODO the end

