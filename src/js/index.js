const INPUT = document.querySelector(".input-text")
const OUTPUT = document.querySelector(".output-text")
const BTN_CRYPT = document.querySelector(".crypt")
const BTN_DECRYPT = document.querySelector(".decrypt")
const BTN_COPY = document.querySelector('.copy')


const PLACEHOLDER_TEXT = 
            `<div class="placeholder">
                <img class="image" src="src/img/placeholder.svg">
                <p class="placeholder-title">Nenhuma mensagem encontrada</p>
                <p class="placeholder-text">Digite um texto que você deseja criptografar ou descriptografar.</p>
            </div> `

OUTPUT.innerHTML = PLACEHOLDER_TEXT

const CRYPT_CODE = [
    ["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]]

let textCrypt

BTN_CRYPT.addEventListener('click', (textCrypt)=> {

    textCrypt = INPUT.value
    textCrypt = textCrypt.replace(/[^a-z ]+/g,'')

    for (let i = 0; i < CRYPT_CODE.length; i++) {
        if (textCrypt.includes(CRYPT_CODE[i][0])){
            textCrypt = textCrypt.replaceAll(CRYPT_CODE[i][0], CRYPT_CODE[i][1])
        }
        
    }
    if (textCrypt == ''){
        OUTPUT.innerHTML = PLACEHOLDER_TEXT
    } else {
        OUTPUT.innerHTML = `<textarea class="input-text text-copy" style="color:black;">${textCrypt}</textarea>
        <button class='button copy' onclick="Copy()">Copiar</button>`
      }
    INPUT.value = ""
})

BTN_DECRYPT.addEventListener('click', (textCrypt)=> {
    textCrypt = INPUT.value
    textCrypt = textCrypt.replace(/[^a-z ]+/g,'')

    for (let i = 0; i < CRYPT_CODE.length; i++) {
        if (textCrypt.includes(CRYPT_CODE[i][1])){
            textCrypt = textCrypt.replaceAll(CRYPT_CODE[i][1], CRYPT_CODE[i][0])
        }
        
    }
    if (textCrypt == ''){
        OUTPUT.innerHTML = PLACEHOLDER_TEXT
    } else {
        OUTPUT.innerHTML = `<textarea class="input-text text-copy" style="color:black;">${textCrypt}</textarea>
        <button class='button copy'>Copiar</button>`
      }
    INPUT.value = ""
})

BTN_COPY.addEventListener('click', Copy())

function Copy() {
    let copy = document.querySelector('.text-copy')
    copy.select()
    copy.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copy.value)
    OUTPUT.innerHTML = PLACEHOLDER_TEXT
}