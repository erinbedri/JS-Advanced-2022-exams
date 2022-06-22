class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    };

    get likes() {
        let totalLikes = this._likes.length;

        if (totalLikes === 0) {
            return `${this.title} has 0 likes`;
        } else if (totalLikes === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${totalLikes - 1} others like this story!`;
        }
    };

    like(username) {
        let user = this._likes.filter(user => user === username);

        if (!user) {
            throw new Error('You can\'t like the same story twice!');
        };

        if (username === this.creator) {
            throw new Error('You can\'t like your own story!');
        };

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    };

    dislike(username) {
        let user = this._likes.filter(user => user == username);

        if (!user) {
            throw new Error('You can\'t dislike this story!');
        };

        this._likes = this._likes.filter(likes => likes != username);
        return `${username} disliked ${this.title}`;
    }


}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
