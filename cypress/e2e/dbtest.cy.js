
import '../support/commands';


describe('Validate db scenario',()=>{

   
    it('Verify db test',()=>{
       cy.sqlServer('select firstname from persons').then(function(result)
       {
       
        console.log(result)
       })
       })
        
    })
