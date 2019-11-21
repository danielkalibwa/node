
function addition(num1,num2){
    
  if(num1 == undefined || num2 == undefined){

    return "Please Enter Numbers you want to add";
  
  }else{

    let sum = num1 + num2;
    return sum;
  }
  
}

//describe creates a test suite
  describe("Addition Function", () => {

    it("It should add two numbers and return the sum", () => {     
     
      expect(addition(1 , 5)).toEqual(6); 
    });

    it("When no parameters are passed it should give feedback", () => {     
     
      expect(addition()).toEqual("Please Enter Numbers you want to add"); 
    });
  });