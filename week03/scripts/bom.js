const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptArray = getChapterList() || [];

chaptArray.forEach(chapter => {
    displayList(chapter);
});
  button.addEventListener('click', () => {
    if (input.value != '') {  
        displayList(input.value); 
        chaptArray.push(input.value);  
        setChapterList(); 
        input.value = ''; 
        input.focus();
    }
});
function displayList(item){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent)
        input.focus();
    });
    console.log('display')
}
function setChapterList(){
    localStorage.setItem('BOMChapterList',JSON.stringify(chaptArray));
}
function getChapterList(){
    return JSON.parse(localStorage.getItem('BOMChapterList'));
}
function deleteChapter(){
    chapter = chapter.slice(0,chapter.length-1);
    chaptArray = chaptArray.filter((item) => item !== chapter);
    setChapterList();
}

// button.addEventListener('click',() =>{
//     if(input.value != ''){
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');
//         li.textContent = input.value;
//         deleteButton.textContent = 'X';
//         li.append(deleteButton);
//         list.append(li);
//         deleteButton.addEventListener('click', ()=> {
//             list.removeChild(li);
//             input.focus();
//         });
//     }
//     input.focus();
//     input.value = '';
// });

