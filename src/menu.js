function menu(){
    const menuPage = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuPage.appendChild(menuTitle);
    const menuList = ['Mutton Tapelu','Dalwalu Tapelu',
                'Mutton Kheema','Kheema Kaleji',
                'Papdi with Mutton','Mamna Fry',
                'Mamna Gravy','Paya(1 Pair)','Bheja Fry(1 piece)',
                'Chicken Fry','Chicken Tikka','Green Chicken',
                'Angara Chicken','Tandoori Chicken','Golden Tikka',
                'Chicken Peri Peri','Malai Cheese Tikka','Chicken Butter Masala(Gravy)',
                'Chicken Curry(Gravy)','Lemon Chicken(Gravy',
                'Mutton Biryani','Chicken Biryani'];
    const header1 = document.createElement('h2');
    header1.textContent = 'Mutton';
    const header1List = document.createElement('ul');
    let header1Menu = [];
    for(let i = 0; i < 9;i++){
        header1Menu[i] = document.createElement('li');
        header1Menu[i].textContent = menuList[i];
        header1List.appendChild(header1Menu[i]);
    }

    const header2 = document.createElement('h2');
    header2.textContent = 'Chicken';
    const header2List = document.createElement('ul');
    let header2Menu = [];
    for(let i = 9; i < 20;i++){
        header2Menu[i] = document.createElement('li');
        header2Menu[i].textContent = menuList[i];
        header2List.appendChild(header2Menu[i]);
    }

    const header3 = document.createElement('h2');
    header3.textContent = 'Biryani';
    const header3List = document.createElement('ul');
    let header3Menu = [];
    for(let i = 20; i < 22;i++){
        header3Menu[i] = document.createElement('li');
        header3Menu[i].textContent = menuList[i];
        header3List.appendChild(header3Menu[i]);
    }
    menuPage.append(header1,header1List,header2,header2List,header3,header3List);
    return menuPage;
}

export default menu();