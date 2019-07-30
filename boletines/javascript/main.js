
//DOM
// let links = document.querySelectorAll("a");


// links.forEach(function(link){
// 	console.log(link);
// });

// let links = document.querySelectorAll(".close");

// links.forEach(function(link){

// 	link.addEventListener("clic",function(ev){
// 		ev.preventDefault();

// 		return false;



// 	});
// });

// let iconos = document.querySelectorAll("i");

// iconos.forEach(function(icono){
// 	icono.classList.remove("fa-star");
// })

let links = document.querySelectorAll(".close");

links.forEach(function(link){

	link.addEventListener("click",function(ev){
		ev.preventDefault();
		let content = document.querySelector('.content')


        content.classList.remove("fadeOutUp");
        content.classList.remove("animated");


        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){
        	location.href = "/";
        },100);
      

		return false;
	});
});
