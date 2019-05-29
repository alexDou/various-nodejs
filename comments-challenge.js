/**************************
 * Alternative using ES5 prototypes
 * Or feel free to choose your own solution format
 **************************/
 
 function User(name) {
     this.setName(name);
     this._loggenId = false;
     this._lastLoggedIn = null;
}
 
 User.prototype = Object.assign(User.prototype, {
  isLoggedIn: function() {
      return this._loggenId;
  },
  getLastLoggedInAt: function() {
      return this._lastLoggedIn;
  },
  logIn: function() {
      this._loggenId = true;
      this._lastLoggedIn = (new Date).toUTCString();
  },
  logOut: function() {
      this._loggenId = false;
  },
  getName: function() {
      return this._name;
  },
  setName: function(name) {
      this._name = name;
  },
  canEdit: function(comment) {
      if (comment.getAuthor().name === this._name) {
          return true;
      }
      
      return false;
  },
  canDelete: function(comment) {
      if (comment.getAuthor().name === this._name) {
          return true;
      }
    
      return false;
  }
});

var Moderator = function Moderator(name) {
    return new User(name)
};
Moderator.prototype = Object.assign(User.prototype, {
    canEdit: function() {
        return false;
    },
    
    canDelete: function() {
        return true;
    }
})

var Admin = function Admin(name) {
    return new Moderator(name);
};
Admin.prototype = Object.create(Moderator.prototype, {
    canEdit: function() {
        return true;
    },
    
    canDelete: function() {
        return true;
    }
});
 
 function Comment(author, message, repliedTo) {
     this._author = author;
     this.setMessage(message);
     this._repliedTo = repliedTo;
     this._createdAt = (new Date()).toUTCString();
 }
 Comment.prototype = Object.assign(Comment.prototype, {
  getMessage: function() {
      return this._message;
  },
  setMessage: function(message) {
      this._message = message;
  },
  getCreatedAt: function() {
      this._createdAt;
  },
  getAuthor: function() {
      return this._author
  },
  getRepliedTo: function() {
      return this._repliedTo;
  },
  
  toString: function() {
      return this.getRepliedTo() ?
          this.getMessage()+ ' ' +this.getAuthor() :
          this.getMessage()+ ' ' +this.getAuthor()+ ' in reply to: ' +this.getRepliedTo().getAuthor().name;
  }
});

// const user = new User('test');
// console.log(user.getName());
// const admin = new Admin('admin');
// console.log(admin.getName(), admin instanceof Moderator);
// const moder = new Moderator('moder');
// console.log(moder.getName(), moder instanceof User);

class Mammal {
    constructor(name) {
        this._name = name;
    }
    
    getSomething() {
        return 'something'
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name)
    }
}

const dog = new Dog('wooffy');
console.log(JSON.str)
