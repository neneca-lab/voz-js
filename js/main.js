let btn = document.querySelector(".falar")

btn.addEventListener("click", () => {
    let texto = document.querySelector(".ipt-text").value
    let voz = new SpeechSynthesisUtterance(texto)

    voz.lang = 'pt-BR'
    voz.pitch = 3
    voz.volume = 1
    voz.rate = 1

    speechSynthesis.speak(voz)

    document.querySelector(".ipt-text").value = "";
})