

// barra de menu
const menuBar = document.createElement('div');
menuBar.style.position = 'fixed';
menuBar.style.top = '0';
menuBar.style.left = '0';
menuBar.style.width = '100%';
menuBar.style.backgroundColor = 'rgba(63, 188, 176, 0.5)'; 
menuBar.style.display = 'flex';
menuBar.style.justifyContent = 'center';
menuBar.style.backdropFilter = 'blur(5px)'; 

//  botões
const homeButton = createButton('Home', 'Index.html');
const aboutButton = createButton('Projetos', 'projetos.html');
const contactsButton = createButton('Contato', 'contato.html');

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
    
    // Adiciona eventos de mouseover e mouseout
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'rgba(238,169,144, 0.5)';
        button.style.transition = 'background-color 0.3s ease';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'rgba(63, 188, 176, 0.5)';
        button.style.transition = 'background-color 0.3s ease';
    });
    
    return button;
}
