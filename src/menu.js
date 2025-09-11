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
                'Chicken Curry(Gravy)','Lemon Chicken(Gravy)',
                'Mutton Biryani','Chicken Biryani'];
    
    const menuPrice = ['1000/-','1000/-','1000/-','1100/-','1100/-',
                '1000/-','1000/-','1000/-','300/-','700/-','700/-',
                '700/-','700/-','750/-','750/-','750/-','900/-',
                '700/-','700/-','750/-', '1000/-','900/-'];


    const menuName = ['Mutton', 'Chicken', 'Biryani'];
    const menuKg = '1kg';
    //declaration of header
    let header = [];
    //content under header
    let perKg = [];
    let headerTitle = [];

    //declaration of menu
    let menuDiv = [];
    //content under menu
    let menu = [];
    let price = [];   
    let counter = 0;
    let headerList = [];
    let countUpto;
    const leng = [9,11,2];
    for(let i = 0; i< 3; i++){
        header[i] = document.createElement('div');
        headerTitle[i] = document.createElement('h2');
        perKg[i] = document.createElement('h2');
        headerTitle[i].textContent = menuName[i];
        headerList[i] = document.createElement('ul');
        perKg[i].textContent = menuKg;
        header[i].append(headerTitle[i],perKg[i]);
        console.log(header[i]);
        menu[i] = [];
        price[i] = [];
        menuDiv[i] = [];
        countUpto = counter + leng[i];
        for(let j = counter; j < countUpto; j++){
            menuDiv[i][j] = document.createElement('div');
            menu[i][j] = document.createElement('li');
            menu[i][j].textContent = menuList[j];
            price[i][j] = document.createElement('li');
            price[i][j].textContent = menuPrice[j];
            headerList[i].appendChild(menuDiv[i][j]);
            menuDiv[i][j].append(menu[i][j],price[i][j]);
            counter++;
       }
        menuPage.append(header[i],headerList[i]);
      }
    return menuPage;
}
export default menu();