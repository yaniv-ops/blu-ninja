function loopChar(id) {
    let textElementOne = document.querySelector(id);
    let textContentOne = textElementOne.textContent;
    textElementOne.innerHTML = '';
   
    for (let char of textContentOne) {
        let span;
        span = document.createElement('span');
        span.textContent = char;
        textElementOne.appendChild(span);
    }

    let spans = document.querySelectorAll('.type-reveal-1 span');
    window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    spans.forEach((span, index)=>{
        
        if(scrollDistance >= (index) && (index)<=10 ){
            span.classList.add('active-title');
        } 
        if(scrollDistance >= (index)) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');
            span.classList.remove('active-title');

        }
    })
}
)
}

loopChar('.type-reveal-1')





