
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

// TODO: Add other courses.
const courseList = [
   { name: 'Accounting', value: 'accounting' },
   { name: 'Aerospace Engineering', value: 'aerospace-engineering' },
   { name: 'Agriculture, Forestry and Food', value: 'agri-forect-food' },
];

const uniList = [
   { name: 'Dublin City University', value: 'dcu' },
   { name: 'Maynooth University', value: 'maynooth-university' },
   { name: 'University College Cork', value: 'uni-college-cork' },
   { name: 'University College Dublin', value: 'uni-college-dublin' },
];

const typeList = [
   { name: 'Postgraduate', value: 'postgraduate' },
   { name: 'Undergraduate', value: 'Undergraduate' },
   { name: 'Foundation', value: 'Foundation' },
   { name: 'Pre-Sessional', value: 'Pre-Sessional' },
   { name: 'English Language', value: 'english-language' },
   { name: 'Pre-Masters', value: 'pre-masters' },
   { name: 'Research', value: 'research' },
];

function switchSearchMode(id) {
   switch (id) {
      case 'couMode': {
         let optionList = '';
         courseList.forEach(val => {
            // optionList += `<option value="${val.value}">${val.name}</option>`
            optionList += `<li><a href="#">${val.name}</a></li>`;
         });
         let option2List = '';
         typeList.forEach(val => {
            // option2List += `<option value="${val.value}">${val.name}</option>`
            option2List += `<li><a href="#">${val.name}</a></li>`;
         });

         $('#couMode').addClass('active');
         $('#schMode').removeClass('active');
         $('#uniMode').removeClass('active');
         $('#webMode').removeClass('active');

         // $('#first-selection-dropdown').removeClass('d-none');
         // $('#second-selection-dropdown').removeClass('d-none');

         console.log($('#first-selection-dropdown'));
         // $('#first-selection-dropdown').find('li').remove();
         $('#first-selection-dropdown').empty();
         $('#first-selection-dropdown')
            .append(optionList);

         $('#second-selection-dropdown').empty();
         $('#second-selection-dropdown')
            .append(option2List);
   

         break;
      }
      case 'schMode': {
         $('#couMode').removeClass('active');
         $('#schMode').addClass('active');
         $('#uniMode').removeClass('active');
         $('#webMode').removeClass('active');

         // $('#first-selection-dropdown').addClass('d-none');
         // $('#second-selection-dropdown').addClass('d-none');
         break;
      }
      case 'uniMode': {
         let optionList = '';
         uniList.forEach(val => {
            // optionList += `<option value="${val.value}">${val.name}</option>`
            optionList += `<li><a href="#">${val.name}</a></li>`;

         });

         $('#couMode').removeClass('active');
         $('#schMode').removeClass('active');
         $('#uniMode').addClass('active');
         $('#webMode').removeClass('active');

         // $('#first-selection-dropdown').removeClass('d-none');
         // $('#second-selection-dropdown').addClass('d-none');
         $('#first-selection-dropdown').empty();
         $('#first-selection-dropdown')
            .append(optionList);

         break;
      }
      case 'webMode': {
         $('#couMode').removeClass('active');
         $('#schMode').removeClass('active');
         $('#uniMode').removeClass('active');
         $('#webMode').addClass('active');

         // $('#first-selection-dropdown').addClass('d-none');
         // $('#second-selection-dropdown').addClass('d-none');

         break;
      }
   }
   
}


function filterMasterList(courseValue,levelValue,words){
   
   // let level = $('input[name]="course_type"');

   let keywords = words;
   let filteredList = masterList;

   let mode = $('.active')[0].id;
   let searchText = $('#si-course-search')[0].value;
   let firstDropdown = $('#first-selection-dropdown').val();
   let secondDropdown = $('#second-selection-dropdown').val()


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

switchSearchMode('couMode');

$('#myInput').focusin(() => {
   $('#first-selection-dropdown').removeClass('d-none');
});

$('#myInput').focusout(() => {
   $('#first-selection-dropdown').addClass('d-none');
});
 
 function filterFunction() {
   var input, filter, ul, li, a, i;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   div = document.getElementById("myDropdown");
   a = div.getElementsByTagName("a");
   for (i = 0; i < a.length; i++) {
     txtValue = a[i].textContent || a[i].innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       a[i].style.display = "";
     } else {
       a[i].style.display = "none";
     }
   }
 }

