const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
//using dot notation
console.log(`Dimensions of the Empire State Building:
 height: ${empireStateBuilding.height}
 squareFeet:  ${empireStateBuilding.squareFeet}
 eastWestLength:  ${empireStateBuilding.eastWestLength}
 northSouthLength:  ${empireStateBuilding.northSouthLength}
 `)

 let stories = "stories";
 let address = "address";
 let constructionDate = "constructionDate";
 let owner = "owner";
 let architect = "architect";

  
  //using key value
  console.log(`Empire State Building Facts: 
  Stories: ${empireStateBuilding[stories]}
  Address: ${empireStateBuilding[address]}
  Construction Date: ${empireStateBuilding[constructionDate]}
  Owner: ${empireStateBuilding[owner]}
  Architect: ${empireStateBuilding[architect]}
  `)

 