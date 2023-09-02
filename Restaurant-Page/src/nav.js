const nav =()=> {
    const elementnav = document.createElement('div');
    const homeBtn = document.createElement(`button`)
    homeBtn.classList.add(`home-button`)
    homeBtn.dataset.id = `home`
    homeBtn.classList.add(`nav-button`)
    homeBtn.innerText = `home`
    elementnav.appendChild(homeBtn)
    const aboutBtn = document.createElement(`button`)
    aboutBtn.classList.add(`about-button`)
    aboutBtn.dataset.id = `about`
    aboutBtn.classList.add(`nav-button`)
    aboutBtn.innerText = `about`
    elementnav.appendChild(aboutBtn)
    const infoBtn = document.createElement(`button`)
    infoBtn.classList.add(`info-button`)
    infoBtn.dataset.id = `info`
    infoBtn.classList.add(`nav-button`)
    infoBtn.innerText = `info`
    elementnav.appendChild(infoBtn)
    

    
    return elementnav
}

export default nav