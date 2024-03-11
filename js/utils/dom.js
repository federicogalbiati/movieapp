// funzione al caricamento della pagina verifichi che il titolo sia corretto, in caso lo corregge

export const fixTitle = () => {

    //  tag h1 che contiene il titolo 
    const title = document.getElementById('header');

    const titleContent = title.innerText;

    if (titleContent.innerText ==="Movie App")
        return
    else {
        title.innerHTML = "Movie App";
    }
};

// una funzione che al caricamento della pagina aggiunga un paragrafo con il titolo di un film
export const addParagraph = () => {
    const title = document.getElementById("header");

    const paragraph = document.createElement("p")
    
    paragraph.innerText ="Indiana Jones";
    
    title.appendChild(paragraph)
    
}
