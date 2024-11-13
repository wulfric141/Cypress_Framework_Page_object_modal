
import '../support/commands';


context('Validate db scenario',()=>{

   
    it('Verify db test',()=>{
       cy.sqlServer('select firstname from persons').then(function(result)
       {
       
        console.log(result)
       })
       })
        
    })
