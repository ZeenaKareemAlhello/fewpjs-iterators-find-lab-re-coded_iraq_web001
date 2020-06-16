const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  
]

function superbowlWin(array){
  let a

  a=array.find((item)=> item.result==="W" )
  if(typeof a !=='undefined'){
   return  a.year}
   else{
   return undefined}
                       
}
superbowlWin(record)