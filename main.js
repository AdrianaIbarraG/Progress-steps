const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

prev.addEventListener('click', ()=>{
    currentActive--;
    
    if(currentActive < 1){
        currentActive = 1;
    }

    update();
    /* Test */
    /* console.log(currentActive); */
})


next.addEventListener('click', ()=>{
    currentActive++;
    
    if(currentActive>circles.length){
        currentActive = circles.length;
    }

    update();
    /* Test */
    /* console.log(currentActive); */
})

function update(){
    circles.forEach((circle, index)=>{
        if(index < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })


    const actives = document.querySelectorAll('.active');
    
    /* Progress line active */
    progress.style.width=((actives.length - 1)/(circles.length - 1))*100 + '%'

    /* Test */
    /* console.log(actives.length, circles.length);
    console.log(actives.length/circles.length); */

    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true; /* btn disabled */
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}


