document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("#memeForm");
    const imageSource = document.querySelector("#image");
    const textTop = document.querySelector("#topText");
    const textBottom = document.querySelector("#bottomText");
    const memes = document.querySelector("#memes");

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const newMeme = document.createElement('div');
        const image = document.createElement("img");
        const memeTop = document.createElement("div");
        const memeBottom = document.createElement("div");
        const removeButton = document.createElement('button');

        console.log(e.target)

        newMeme.style.position = 'relative'
        newMeme.style.textAlign = 'center';
        //newMeme.style.width = '200px';

        image.setAttribute("src",imageSource.value);
        //image.style.width = '200px';

        memeTop.innerHTML = textTop.value;
        memeTop.style.position = "absolute";
        memeTop.style.top = '5%';
        memeTop.style.left = '50%';
        memeTop.style.width = '400px'
        memeTop.style.transform = 'translate(-50%, -50%)';


        memeBottom.innerHTML = textBottom.value;
        memeBottom.style.position = "absolute";
        memeBottom.style.bottom = '0%';
        memeBottom.style.left = '50%';
        memeBottom.style.width = '400px'
        memeBottom.style.transform = 'translate(-50%, -50%)';

        removeButton.innerHTML = 'X';
        removeButton.style.position = "absolute"
        removeButton.style.right = '2.5%';

        newMeme.appendChild(image);
        newMeme.appendChild(memeTop);
        newMeme.appendChild(memeBottom);
        newMeme.appendChild(removeButton);
        memes.appendChild(newMeme);

        form.reset();

        memes.addEventListener ('click', function(e){
            if(e.target.tagName === 'BUTTON'){
                e.target.parentElement.remove();
            }
        })
    })
})