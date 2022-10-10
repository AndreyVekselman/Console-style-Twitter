function User(userName) {
  this.userName = userName;
  this.followers = [];
  this.iFollow = [];

  this.addFollower = function (someUser) {
    this.followers.push(someUser);
    this.addiFollower(this);
  };

  this.addiFollower = function (someUser) {
    this.iFollow.push(someUser);
  };

  this.sendMessage = function (myMessage) {
    this.followers.forEach((follower) => {
      follower.getMessage(myMessage, this.userName);
    });
  };

  this.getMessage = function (theMessage, userName) {
    console.log(
      this.userName + " got this massage from " + userName + ": " + theMessage
    );
  };
}
let myUser1 = new User("Andrey");
let myUser2 = new User("Eli");
let myUser3 = new User("Yaniv");
let myUser4 = new User("Oleg");

myUser1.addFollower(myUser2);
myUser1.addFollower(myUser3);
myUser1.addFollower(myUser4);

myUser2.addFollower(myUser3);
myUser2.addFollower(myUser4);

myUser3.addFollower(myUser4);

myUser1.sendMessage("Hello my dear freind");
myUser2.sendMessage("Hello my dear freind");
myUser3.sendMessage("Hello my dear freind");
myUser4.sendMessage("Hello my dear freind");

console.log(myUser1);
console.log(myUser2);
console.log(myUser3);
console.log(myUser4);
