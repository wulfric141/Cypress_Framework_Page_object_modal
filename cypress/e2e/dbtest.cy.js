
describe('Database Query', () => {
    const sqlquery='SELECT firstname from persons where personid=1';
   
      it.only("query for user abhi",()=>{
        cy.task('queryDb',sqlquery).then((result) => {
          cy.log(result)
          result.forEach((row, index) => {
            cy.log(`Row ${index + 1}: ${JSON.stringify(row)}`);
          
  
      })
      
  })
  })
  })