const users = [ 
    { name: "Elvin", surname: "Huseynov" },
    { name: "Ruslan", surname: "Mammadov" }
  ];
  
  const fullNames = users.map(user => `${user.name} ${user.surname}`);
  
  console.log(fullNames);