
var masterList= [
{
   "keywords": ["Dublin", "accounts", "university", "accounts"],
   "description": "some data",
   "course": ["accounting"],
   "level": ["postgraduate"],
   "url": ""
 },
 {
   "keywords": ["Dublin", "accounts", "university", "accounts"],
   "description": "some data",
   "course": ["accounting"],
   "level": ["postgraduate","undergraduate"],
   "url": ""
 },
 {
   "keywords": ["Dublin", "accounting", "university", "accounts"],
   "description": "some data",
   "course": ["stats"],
   "level": ["postgraduate","graduate"],
   "url": ""
 }
]

function filterMasterList(courseValue,levelValue,words){
   let course = courseValue;
   let level = levelValue;
   let keywords = words;
   let filteredList = masterList;

   console.log(course);
   console.log(level);
   console.log(keywords);

   if(course){
      filteredList = filteredList.filter(obj => obj.course.includes(course));
   }
   if(level){
      filteredList = filteredList.filter(obj => obj.level.includes(level));
   }
   if(keywords){
      filteredList = filteredList.filter(obj => obj.keywords.includes(keywords));
   }

   return filteredList;
}


