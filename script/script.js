
function solve() {
    let rows = document.getElementsByTagName('tr')
    y = -1
    for (row of rows) {
        y += 1
        cells = row.cells
        x = -1
        for (cell of cells) {
            i = 1
        }
    }
    console.log(window.scrollY)
}

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 25) {
        window.requestAnimationFrame(() => {
            let header = document.getElementsByTagName('header')[0]
            let black = document.createAttribute('class')
            black.value = "blacken"
            header.setAttributeNode(black)
            let slider = document.getElementById('slider')
            console.log(slider)
            let slide = document.createAttribute('class')
            slide.value = 'top_slider slide'
            slider.setAttributeNode(slide)
        })
    } else {
        window.requestAnimationFrame(() => {
            let header = document.getElementsByTagName('header')[0]
            header.removeAttribute('class')
            let slide = document.createAttribute('class')
            slide.value = 'top_slider'
            slider.setAttributeNode(slide)
        })
    }
})
