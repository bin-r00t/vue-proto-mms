// we use class to represent entities like User/Article/etc.
import { add, update } from "@/api/User";

class User {
    constructor ({ name, phone, email, description, isAdmin}) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.description = description;
        this.isAdmin = isAdmin;
    }

    save() {
        // signup & signin & update
        // save to backend
        // if (this.checkValid()) { // save to backend }
        
        add()
        // or 
        update()
    }

    update({ name, phone, email, description, isAdmin }, immediate = true) {
        // check cache to determine wether send request to server
        // if not change, DO NOT send request to server
        // 'immediate' means send request to update right now
        // update and save
        // ...
        // this.save()
    }

    checkValid() {
        // to check if a user's information is valid!
    }

    login() {}

    logout() {}

    destroy() {
        // 注销账户
    }
}

class Article {
    
}
