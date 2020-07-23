// Assignment 9


// Chapter 38-42

// Question 1
// function power(a,b){
//     return a**b
// }
// console.log(power(2,2))

// Question 2
// saal = prompt('Enter a year: ');
// function leapYear(saal){
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ){
//         alert('The year you enter is leap year...');
//     }else{
//         alert('It is not leap year...');
//     }
// };
// leapYear(saal);

// // Quesiton 3
// function S(a,b,c){
//     UK = (a + b + c)/2;
//     return UK;
// };
// function AreaOfTriangle(a,b,c){
//     area = S(a,b,c) * (S(a,b,c) - a) * (S(a,b,c) - b) * (S(a,b,c) - c);
//     return area;
// }
// console.log('Area = ' + AreaOfTriangle(4,5,6))


// // Quesiton 4
// variable = 0;
// for(var i = 0;i < 3; i++){
//     var inp = 'Enter marks of sub '+ i;
//     variable = prompt(inp);
//     mark = parseInt(mark);
//     marks = marks + mark
// }
// var total = parseInt(prompt('Enter total marks'));
// function average(){  
//     var avg = marks/3;
//     return avg
// }

// function percentage(){
    
//     var percentage = (marks/total) * 100;
//     return percentage
// }

// function result(){
//     document.write('Your avg is: ',average())
//     document.write('<br>Your percentage is: ',percentage())
// }

// result()


// Question 5
// function NoOfIndex(str, findStr){
//     var conf = false;
//     for(var i = 0;i < (str.length);i++){
//         if (str[i] == findStr){
//             console.log(i);
//             conf = true
//             break;
//         }
//     }
//     if(conf == false){
//         console.log(-1)
//     }
// }
// NoOfIndex('abcded','g')
// NoOfIndex('abcded','d')



// Question 6
// function dltVowels(str){
//     var newStr = ""
//     if(str.length <= 25){
//         for(var i = 0; i < str.length; i++){
//             if('aeiouAEIOU'.indexOf(str[i]) == -1){
//                 newStr = newStr + str[i]
//             }
//         }
//     }
//     console.log(newStr)
// }
// dltVowels('abcdefghijklmnop')



// Question 7
// function vow(sentence){
//     var exp = "";
//     var lst = []
//     for (var i = 0; i < sentence.length; i++){
//         if(i != 0){
//             exp = sentence[i-1] + sentence[i];
//             switch(exp){
//                 case exp:
//                     if(('aeiouAEIOU'.indexOf(exp[0]) != -1) && ('aeiouAEIOU'.indexOf(exp[1]) != -1)){
//                         lst.push(exp)
//                     }
//             }
//         }
//     }
//     console.log(lst)
// }

// vow('Pleases read this application and give me gratuity')



// Question 8
// var dist = prompt('Enter distance in km',00);
// document.write('The dist you entered b/w twon cities is: ' + dist + ' KM')
// function meter(dist){
//     var distm = dist * 1000;
//     return(distm) 
// }

// function feet(dist){
//     var distf = dist * 3280.84;
//     return(distf)
// }

// function inches(dist){
//     var disti = dist * 39370.1;
//     return(disti)
// }

// function cm(dist){
//     var distc = dist * 100000;
//     return(distc)
// }

// document.write('<br>Meter: '+ meter(dist))
// document.write('<br>Feet: '+feet(dist))
// document.write('<br>Inches: '+inches(dist))
// document.write('<br>CM: '+cm(dist))



// Question 9
// function overtimePay(totalHr,overTimeHr){
//     if (totalHr >= 40){
//         overTimeAmt = Math.ceil(overTimeHr) * 12
//     }
//     return(overTimeAmt)
// }

// console.log(overtimePay(41,2.5))



// Question 10
// function NoOfNotes(amount){
//     console.log('No of hundred notes: '+ (Math.floor(amount/100)));
//     console.log('No of fifty notes: ' + Math.floor((amount%100)/50));
//     console.log('No of ten notes: ' + Math.floor(((amount%100)%50)/10));
// }
// NoOfNotes(470)



// Chapter 43-48

// Question 1
// html code is on index.hmtl
function alrt(){
    alert('Welcome to JavaScript...')
}



// Question 2
function thank(){
    alert('Thanks for buying this phone...')
}



// Quesiton 3
// var students = ['Ushna', 'Fizo', 'JoJo']
// function studentInfo(students){
//     var tr = "";
//     for(var i=0; i< students.length; i++){
//         tr = tr + '<tr><td>' + i+'<td/><td>'+students[i] +'<td/><td><button>Delete<button/><td/><tr/>'
//         document.getElementById('tble').innerHTML = tr
// }
// }
// studentInfo(students)



// Question 4
function change(){
    document.getElementById('abc').innerHTML = '<img src="img2.jpg" width="200px" height="300px" alt="">'
}

function change1(){
    document.getElementById('abc').innerHTML = '<img src="img1.jpg" width="200px" height="300px" alt="">';
}



// Question 5
var incr = 0
function inc(){
    incr = incr + 1
    document.getElementById('inc').innerHTML = incr
}

function dec(){
    incr = incr - 1
    document.getElementById('inc').innerHTML = incr
}



// Chapter 49-52

// Question 1
function showDet(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

    document.write('<br>Name: ', name)
    document.write('<br>Email: ', email)
    document.write('<br>Address: ', address)

}



// Quesiton 2
function more(){
    document.getElementById('django').innerHTML = 'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.';
}



// Question 3




// Chapter 53-58
var img_path = ['1.jpg','2.jpg','3.jpg','4.png','5.jpg','6.jpg','7.png','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.png','15.jpg',]

var img = "";
var div = document.getElementById('img_div');
for (var i=0; i < img_path.length; i++){
    adimg  = '<img width="200px" height="200px" id="'+i + '" onclick="showModal(this.src)" src="' + img_path[i] + '">'
    img = img + adimg
    div.innerHTML = img
}
var modal = document.getElementById('modal');
var modal_img = document.getElementById('modal_img');
function showModal(src){
    modal.style.display = 'block';
    modal.classList.add('modal-open');
    modal_img.src = src;
    modal.classList.remove('modal-close')
}

function onClosedImagModal(){
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}



// Chapter 58-67
// Question 1

// Part 1
var element = document.getElementById('main-content');
// Part 2
console.log(element.innerHTML);
// Part 3
var render = document.getElementsByClassName('render');
for(var i = 0; i < render.length; i++){
    document.write('<br>',render[i].innerHTML)
}
// Part 4
document.getElementById('first-name').value = 'Muhammad';
// Part 5
document.getElementById('last-name').value = 'Daniyal';
document.getElementById('email1').value = 'abc@example.com';



// Question 2
// Part 1
var element = document.getElementById('form-content');
document.write('<br><br>Node type of form-content: ',element.nodeType)
// Part 2
var lastName = document.getElementById('lastName');
document.write('<br><br>Node type of lastName: ',lastName.nodeType)
console.log(lastName.childNodes)
// Part 3
var lastName = 'Bank Name: ABC';
var element = document.getElementById('lastName');
element.childNodes[0].text = lastName;
// Part 4
console.log(document.getElementById('main-content').firstElementChild);
console.log(document.getElementById('main-content').lastElementChild);
// Part 5
console.log(document.getElementById('lastName').previousElementSibling);
console.log(document.getElementById('lastName').nextElementSibling);
// Part 6
console.log(document.getElementById('email1').parentNode);
console.log(document.getElementById('email1').nodeType);


