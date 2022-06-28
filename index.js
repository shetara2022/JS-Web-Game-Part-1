function newImage(url, left, bottom){
let newImage = document.createElement('img')
newImage.src = url
newImage.style.position = 'fixed'
newImage.style.left = left + 'px'
newImage.style.bottom = bottom + 'px'
document.body.append(newImage)
return(newImage)
}
newImage()

function newItem(url, left, bottom){
  let newItem= document.createElement('img')
newItem.src = url
newItem.position = 'fixed'
newItem.style.left = left + 'px'
newItem.style.bottom = bottom + 'px'
document.body.append(newItem)

  newItem.addEventListener('dblclick', function(){
      newItem.remove()
  })
  
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)










