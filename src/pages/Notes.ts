export default function Notes(): HTMLElement{
    const container = document.createElement("div");

    container.innerHTML = `
    <h1>Notes</h1>
    <p>This is my first vanilla TS SPA page </p>  
    <button id="go-notes">Go to Homes</button>
    `;

    return container
    
}