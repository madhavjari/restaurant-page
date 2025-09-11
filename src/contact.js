function contact(){
    const contactPage = document.createElement('div');
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    const allContacts = document.createElement('div');
    contactPage.append(contactTitle,allContacts);
    const contacts = ['Komal Dodhiawala','Madhav Dodhiawala','Rekha Dodhiawala','Jitendra Dodhiawala'];
    const numbers = ['9574765333','9173865333','9574765333','9173865333'];
    const designation = ['Chef','Delivery Agent','Helper','Manager'];
    let contactName = [];
    let contactNumber = [];
    let contactJob = [];
    for(let i = 0; i < 4; i++){
        contactName[i] = document.createElement('h2');
        contactNumber[i] = document.createElement('div');
        contactJob[i] = document.createElement('div');
        contactName[i].textContent = contacts[i];
        contactNumber[i].textContent = numbers[i];
        contactJob[i].textContent = designation[i];
        allContacts.append(contactName[i],contactNumber[i],contactJob[i]);
    }
    return contactPage;
}
export default contact();