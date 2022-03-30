import "../css/skin.css";
import "../css/estilos.css";
// vamos a modificar el menu con js primero creamos 4 variables

const MoreOption = document.querySelector("#bmore");
// este es nuestro boton de hamburguesa o sea el icono
const bShowMobileLinks = document.querySelector("#bmenu");
// menu de los elementos cuando tenemos diseño mobil
const mobileMenu = document.querySelector(".links");
// more
const moreMenu = document.querySelector(".more .menu");

// damos el evento de que cuando le damos click pasa algo
bShowMobileLinks.addEventListener("click", (e)=> {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

MoreOption.addEventListener("click", (e)=> {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});


// videos
const videos= [
    {
        id:"HzJv6sef8HY",
    },
    {
        id:"4Ps6nV4wiCE",
    },
    {
        id:"pzFnYYXsKtw",
    },
    {
        id:"zP7AGWiw8Uw",
    },
]

const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videos-container');

const bNext= document.querySelector('#next'); 
const bPrev= document.querySelector('#prev');
let current= 0;
// damos la funcion del boton
bNext.addEventListener('click', (e) => { 
    // creamos una variable
    let changed = current;
    current=current+1<videos.length ? current+1:current;
    if(current !=changed){
        renderCurrentVideo(videos[current].id);
    }
    

})
bPrev.addEventListener('click', (e) => {
    let changed = current;
    current=current-1>=0 ? current-1:current;

    if(current !=changed){
        renderCurrentVideo(videos[current].id);
    }

})

renderCurrentVideo(videos[current].id)

function renderCurrentVideo(id){
    currentContainer.innerHTML=`<iframe width="100%" height="500px"  src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

// funcino para agregar miniaturas de los videos que podemos ver
function renderVideos(){
    const html= videos.map((video, index)=>{
        return`
        <div class="item">
        <a href="#" data-id="${index}">
        <img src="http://img.youtube.com/vi/${video.id}/mqdefault.jpg" />
        </a> 
        </div>`;
    });
    videosContainer.innerHTML = html.join("");
    
    document.querySelectorAll('.item a').forEach((item) =>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();
            const id= +item.getAttribute('data-id');
            current=id;
            renderCurrentVideo(videos[current].id)
        });
    });
}
renderVideos();