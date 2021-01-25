for(var i = 0 ; i<20 ; i++){
  var user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    institute:faker.company.companyName(),
    branch:"Computer Science",
    role:"Intern",
    image:faker.image.avatar(),
    contact:faker.phone.phoneNumber(),
    created:faker.date.past()
  }

  User.create(user , function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}
