
var isCommentVisible = true;
var concatTool=document.getElementById('concat-tool')
var conctMain=document.getElementById('conct-main')
var commentIcon = document.querySelector('.fa-comment-dots');
var xIcon = document.querySelector('.fa-x');

function showConcat(){

    concatTool.classList.toggle('active')
    if(isCommentVisible)
    {
        commentIcon.style.display = 'none';
        xIcon.style.display = 'block';
    }
    else
    {
        commentIcon.style.display = 'block';
        xIcon.style.display = 'none';
    }
    isCommentVisible = !isCommentVisible;
}

