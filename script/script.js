
document.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
        window.requestAnimationFrame(() => {
            let header = document.getElementsByTagName('header')[0]
            let black = document.createAttribute('class')
            black.value = "blacken"
            header.setAttributeNode(black)
            let slider = document.getElementById('slider')
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

function solve() {
    for (row of grid.rows) {
        for (cell of row.cells) {
            strip_input(cell)
        }
    }
}

function strip_input(cell) {
    input = cell.getElementsByTagName('input')[0]
    if (input) {
    cell.innerHTML = input.value
    }
}