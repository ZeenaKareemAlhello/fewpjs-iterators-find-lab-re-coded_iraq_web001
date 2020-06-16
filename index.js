const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  
]

superbowlWin(array){
 let a= array.find((item)=>{if(item.result==="W")
                      return item.year})
      return a                
}