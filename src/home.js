import "./style.css";
function home(){
    const homePage = document.createElement('div');
    //creating main four containers of home page
    const brandName = document.createElement('h1'); //exporting the parent element
    const brandIntro = document.createElement('div');
    const brandWhyChoose = document.createElement('div');
    const brandContact = document.createElement('div');
    homePage.append(brandName,brandIntro,brandWhyChoose,brandContact);

    brandName.textContent = "Komal's Kitchen"; // header

    //Introduction container details
    const brandIntro1 = document.createElement('h2');
    const brandIntro2 = document.createElement('div');
    const brandIntro3 = document.createElement('div');
    const textForBrand1 = "Authentic Non-Veg Delights"
    const textForBrand2 = "We are proud to offer freshly prepared, hygienic, and delicious non-vegetarian meals and supplies made with love and care."
    const textForBrand3 = "Whether you're hosting a family gathering, a corporate event, or simply craving home-style non-veg dishes, I provide customized orders delivered right to your doorstep. From traditional favorites to special recipes, every dish is prepared with the finest ingredients, respecting local taste and quality standards."
    brandIntro1.textContent = textForBrand1;
    brandIntro2.textContent = textForBrand2;
    brandIntro3.textContent = textForBrand3;
    brandIntro.append(brandIntro1, brandIntro2, brandIntro3);

    //Why choose Us container details
    const brandChooseTitle = document.createElement('h2');
    brandChooseTitle.textContent = 'Why choose us?';
    const brandChooseUl = document.createElement('ul');
    brandWhyChoose.append(brandChooseTitle,brandChooseUl);
    let brandChooseLi = []
    const textForChoose = ['Fresh, high-quality non-veg preparations',
                            'Made-to-order based on your requirements',
                            'Timely and hygienic delivery',
                            "Authentic flavors tailored to Surti's palate"
    ]
    for(let i = 0; i < 4; i++){
        brandChooseLi[i] = document.createElement('li');
        brandChooseLi[i].textContent = textForChoose[i];
        brandChooseUl.appendChild(brandChooseLi[i]);
    }

    //Contact Address details
    const brandAddressTitle = document.createElement('h2');
    brandAddressTitle.textContent = 'Location';
    const brandAddress = document.createElement('div');
    brandAddress.textContent = '86/2, Ranchodji Park Society, Near Kantareshwar Mahadev Mandir, Katargam, Surat.'
    brandContact.append(brandAddressTitle,brandAddress);
    return homePage;
}

export default home();