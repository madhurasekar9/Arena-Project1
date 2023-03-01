window.arenaCallback = () => { 

    let imageBlocks = document.querySelectorAll('li.image-block')

imageBlocks.forEach((block) => {
    block.querySelector('figure').onclick=()=> { 
        console.log("image clicked")
        block.classList.add('active')
    }
    block.querySelector('aside').onclick = () => {
        block.classList.remove('active')
    } 
})
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.
}


