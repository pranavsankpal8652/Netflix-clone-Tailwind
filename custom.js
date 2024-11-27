var slide_right=document.querySelector('#slide_right')
var slide_left=document.querySelector('#slide_left')

var trendings=document.querySelector('#trendings')
// console.log('hello')
var scrollactions=()=>{ 
    if(trendings.scrollLeft>0){
        slide_left.classList.remove('hidden')
    }
    else{
        slide_left.classList.add('hidden')
    }
    let max_scrolled=trendings.scrollWidth-trendings.clientWidth-50

    if(trendings.scrollLeft>=max_scrolled){
        
        slide_right.classList.add('hidden')
    }
    else{
        slide_right.classList.remove('hidden')
    }
    
}
slide_right.addEventListener('click',()=>{
    trendings.scrollLeft+=600
    scrollactions()
})
slide_left.addEventListener('click',()=>{
    trendings.scrollLeft-=600
    scrollactions()
})

trendings.addEventListener('scroll',()=>{
    scrollactions();
});