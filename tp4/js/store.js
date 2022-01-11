/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
    // variable privée
    var contactList = [];
    
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
  
    return {
      add: function (_name, _firstname, _date, _adress, _mail) {
        var contact = {
          nom: _name,
          prenom: _firstname,
          datedenaissance: _date,
          adresse: _adress,
          email: _mail,
        };
        // ajout du contact à la liste
        contactList.push(contact);
        for (var index in contactList) {
            console.log(contactList[index].nom);
            console.log(contactList[index].prenom);
            console.log(contactList[index].datedenaissance);
            console.log(contactList[index].adresse);
            console.log(contactList[index].email);
            document.querySelector("table tbody").innerHTML =
    document.querySelector("table tbody").innerHTML + "<tr><td>" + _name + "</><td>" + _firstname + "</td><td>" + _date+ "</td><td>" + _adress + "</td><td>" + _mail + "</td></tr>";
          }
        return contactList;
      },
  
      getList: function () {
        return contactList;
      },
    };

  });