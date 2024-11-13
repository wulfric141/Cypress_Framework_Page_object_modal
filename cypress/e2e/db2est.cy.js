
describe('Database Query', () => {
    const sqlquery='SELECT firstname from persons where personid=1';
   
      it.only("query for user smith93",()=>{
        cy.task('queryDb',sqlquery).then((result) => {
          cy.log(result)
          result.forEach((row, index) => {
            cy.log(`Row ${index + 1}: ${JSON.stringify(row)}`);
          
  
      })
      //expect(result[0].first_name).to.equal('rogers');
  })
  })
  })