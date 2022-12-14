// Code your solution in this file!

  function distanceFromHqInBlocks(block){
      let numofblocks
      if(block<=42){
         numofblocks = 42-block
         return numofblocks 
      }else{
         numofblocks = block-42
      return numofblocks
      }
   };

   function distanceFromHqInFeet(block){
    let infeet = distanceFromHqInBlocks(block) * 264
     return infeet;
   }

   function distanceTravelledInFeet(start,destination){
      let blocks
      if(start>destination){
         blocks = start-destination
         return blocks*264
      }else{
         blocks = destination-start
         return blocks*264
      }
   }

   function calculatesFarePrice(start,destination){
      let fare
      let thisfare
      let infeet = distanceTravelledInFeet(start,destination)
      if(infeet<=400){
         fare=0
      }else if (infeet>400 && infeet<=2000){
         thisfare=infeet-400
         fare=thisfare*0.02
      }else if(infeet>2000 && infeet <=2500){
         fare=25
      }else if(infeet>2500){
         fare="cannot travel that far"
      }
      return fare
   }
   

