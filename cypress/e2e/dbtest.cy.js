
describe('Database Query', () => {
    const sqlquery='SELECT firstname from persons';
   
      it.only("query for user abhi",()=>{
        cy.task('queryDb',sqlquery).then((result) => {
          result.forEach((row, index) => {
            cy.log(`Row ${index + 1}: ${JSON.stringify(row)}`);
            
          
  
      })
      
  })
  })
  })