

// barra de menu
const menuBar = document.createElement('div');
menuBar.style.position = 'fixed';
menuBar.style.top = '0';
menuBar.style.left = '0';
menuBar.style.width = '100%';
menuBar.style.backgroundColor = 'rgba(51,51,51, 0.2)'; 
menuBar.style.display = 'flex';
menuBar.style.justifyContent = 'center';
menuBar.style.backdropFilter = 'blur(5px)'; 

//  botões
const homeButton = createButton('HOME', 'Index.html');
const aboutButton = createButton('PROJETOS', 'projetos.html');
const contactsButton = createButton('SOBRE', 'contato.html');

menuBar.appendChild(homeButton);
menuBar.appendChild(aboutButton);
menuBar.appendChild(contactsButton);

// Adiciona a barra de menu ao corpo do documento
document.body.appendChild(menuBar);

function createButton(text, link) {
    const button = document.createElement('a');
    button.textContent = text;
    button.href = link;
    button.style.borderRadius = '20px';
    button.style.margin = '5px 25px';
    button.style.border = '1px solid #ccc';
    button.style.fontSize = '16px';
    button.style.padding = '10px';
    button.style.textDecoration = 'none';
    button.style.color = 'white'; // BEGIN: Set button text color to white
    button.style.fontWeight = 'bold'; // BEGIN: Set button text to bold
    
    // Adiciona eventos de mouseover e mouseout
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'rgba(153,153,153, 0.5)';
        button.style.transform = 'scale(1.1)'; // BEGIN: Increase button size on mouseover
        button.style.transition = 'background-color 0.5s ease, transform 0.5s ease'; // BEGIN: Add transition effect
    });
    
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'rgba(63, 188, 176, 0.0)';
        button.style.transform = 'scale(1)'; // BEGIN: Reset button size on mouseout
        button.style.transition = 'background-color 0.3s ease, transform 0.3s ease'; // BEGIN: Add transition effect
    });
    
    return button;
}
