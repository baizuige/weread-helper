// 检测网页加载完毕

const skinStore = localStorage.getItem('custom_skin')
if (skinStore) {
  // document.body.classList.add('wr_whiteTheme')
  document.body.classList.remove('wr_warmTheme')
  document.body.classList.remove('wr_projectTheme')
  document.body.classList.add(`wr_${skinStore}Theme`)
}
const readerControls = document.querySelector('.readerControls')
// 创建新的按钮
const newButton = document.createElement('button')
newButton.innerHTML = `
  <svg t="1741228347179" class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1502" width="200" height="200"><path d="M857.6 268.8c-9.6-12.8-32-16-44.8-6.4-12.8 9.6-16 32-6.4 44.8 38.4 54.4 57.6 121.6 57.6 201.6 0 48-9.6 92.8-28.8 134.4-12.8-3.2-22.4-3.2-35.2-3.2-86.4 0-156.8 64-156.8 140.8 0 12.8 3.2 28.8 6.4 41.6-38.4 16-76.8 25.6-118.4 25.6-19.2 0-32 16-32 32s16 32 32 32c60.8-3.2 118.4-16 172.8-44.8 9.6-3.2 12.8-12.8 16-19.2 3.2-9.6 0-19.2-3.2-25.6-9.6-12.8-12.8-25.6-12.8-38.4 0-41.6 41.6-76.8 92.8-76.8 12.8 0 25.6 3.2 38.4 6.4 16 6.4 32 0 41.6-16 32-57.6 48-124.8 48-188.8 3.2-92.8-19.2-176-67.2-240zM185.6 700.8c16-9.6 22.4-28.8 12.8-41.6C172.8 608 160 560 160 508.8 160 320 313.6 166.4 502.4 166.4c22.4 0 51.2 3.2 67.2 6.4s35.2-9.6 38.4-25.6-9.6-35.2-25.6-38.4c-22.4-3.2-54.4-6.4-80-6.4C278.4 102.4 96 284.8 96 508.8c0 64 12.8 118.4 44.8 179.2 6.4 9.6 19.2 16 28.8 16 6.4 0 9.6 0 16-3.2z"  p-id="1503"></path><path d="M272 432m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  p-id="1504"></path><path d="M352 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  p-id="1505"></path><path d="M524.8 704l297.6-556.8c9.6-25.6 3.2-57.6-22.4-73.6-25.6-16-57.6-12.8-76.8 12.8L332.8 582.4s0 3.2-3.2 3.2c-9.6 16-12.8 35.2-9.6 51.2 0 3.2 3.2 6.4 3.2 9.6-41.6 3.2-102.4 25.6-115.2 89.6-9.6 44.8 3.2 67.2 9.6 83.2 0 3.2 3.2 6.4 3.2 3.2l-3.2 3.2c-16 22.4-32 25.6-32 25.6-12.8 3.2-22.4 12.8-25.6 25.6-3.2 12.8 3.2 25.6 12.8 32 32 22.4 89.6 51.2 144 51.2 41.6 0 83.2-16 118.4-54.4 54.4-64 44.8-160 44.8-166.4 19.2-6.4 35.2-19.2 44.8-35.2zM384 620.8L736 169.6 470.4 672c-3.2 3.2-6.4 6.4-6.4 3.2L384 627.2v-6.4z m3.2 243.2c-38.4 44.8-92.8 35.2-131.2 19.2 6.4-6.4 9.6-12.8 16-19.2 22.4-32 9.6-57.6 3.2-70.4-6.4-9.6-9.6-22.4-6.4-44.8 6.4-28.8 44.8-35.2 60.8-38.4l89.6 48c0 25.6-3.2 73.6-32 105.6z"  p-id="1506"></path></svg>
`
newButton.setAttribute('title', '皮肤')
newButton.classList.add('readerControls_item')
newButton.classList.add('readerControls_skin')

readerControls.appendChild(newButton)

const skinContainer = document.createElement('div')
skinContainer.classList.add('skinContainer')

const skinBar = document.createElement('div')
//
const maskLayer = document.createElement('div')
skinBar.classList.add('readerControls_skinBar')
maskLayer.classList.add('readerControlsSkinBar_maskLayer')

function addNewSkinBtn(name) {
  const newSkinBtn = document.createElement('button')
  newSkinBtn.classList.add('readerControls_skinBar_item')
  newSkinBtn.classList.add(`${name}_color`)

  newSkinBtn.addEventListener('click', () => {
    document.body.classList.add('wr_whiteTheme')
    document.body.classList.remove('wr_warmTheme')
    document.body.classList.remove('wr_projectTheme')
    document.body.classList.add(`wr_${name}Theme`)
    localStorage.setItem('custom_skin', name)
  })
  return newSkinBtn
}

skinBar.appendChild(addNewSkinBtn('white'))
skinBar.appendChild(addNewSkinBtn('warm'))
skinBar.appendChild(addNewSkinBtn('project'))

skinContainer.appendChild(skinBar)
skinContainer.appendChild(maskLayer)

maskLayer.addEventListener('click', () => {
  skinContainer.classList.remove('skinContainer_show')
})
newButton.addEventListener('click', () => {
  skinContainer.classList.toggle('skinContainer_show')
  // document.body.classList.toggle('wr_warmTheme')
  console.log('clicked')

  const clintHeight = newButton.getBoundingClientRect().y - 80
  console.log(clintHeight)
  skinBar.style.top = clintHeight + 'px'
})

const readerChapterContent = document.querySelector('.readerChapterContent')

readerChapterContent.appendChild(skinContainer)
