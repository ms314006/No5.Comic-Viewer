

!(function () {
    var chaptersList = document.getElementsByClassName('chaptersList');
    if(chaptersList.length != 0){
        for(let i=0;i<=chaptersList.length-1;i++){
            chaptersList[i].onclick = function(){
                window.location = 'comic read.html?chapters=' + i;
            };
        }
    }

    var currentlyPage = document.getElementById('currently_page');
    if(currentlyPage){
        currentlyPage.src='img/storyboard-1.png'
    }
}());
