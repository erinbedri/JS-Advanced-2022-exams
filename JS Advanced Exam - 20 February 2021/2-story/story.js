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
        let user = this._likes.find(user => user === username);

        if (user) {
            throw new Error('You can\'t like the same story twice!');
        };

        if (username === this.creator) {
            throw new Error('You can\'t like your own story!');
        };

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    };

    dislike(username) {
        let user = this._likes.find(user => user === username);

        if (!user) {
            throw new Error('You can\'t dislike this story!');
        };

        this._likes = this._likes.filter(likes => likes !== username);
        return `${username} disliked ${this.title}`;
    };

    comment(username, content, id) {
        let comment = this._comments.find(comment => comment.id === id);

        if (id == undefined || !comment) {
            let newComment = {
                id: Number(this._comments.length + 1),
                username,
                content,
                replies: []
            }
    
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;

        } else if (comment) {
            let totalReplies = comment.replies.length;

            let newReply = {
                id: Number(`${comment.id}.${totalReplies + 1}`), 
                username, 
                content
            }

            comment.replies.push(newReply);
            return 'You replied successfully';
        }
    };

    toString(sortingType) {
        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);

        if (sortingType == 'asc') {
            this._comments = this._comments.sort((a, b) => (a.id - b.id || a.replies.id - b.replies.id));
        } else if (sortingType == 'desc') {
            this._comments = this._comments.sort((a, b) => (b.id - a.id || b.replies.id - a.replies.id));
        } else if (sortingType == 'username') {
            this._comments = this._comments.sort((a, b) => a.username.localeCompare(b.username));

            this._comments.forEach(comment => {
                comment.replies.sort((a, b) => a.username.localeCompare(b.username));
            });

        }

        if (this._comments.length > 0) {
            for (const comment of Object.values(this._comments)) {
                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);

                if (comment.replies.length > 0) {
                    for (const reply of comment.replies) {
                        result.push(`--- ${reply.id}. ${reply.username}: ${reply.content} `)
                    }
                }
            }
        }

        return result.join('\n');
    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 2);
art.comment("Jessy", "Nice :)");
console.log(art.comment("Ammy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('asc'));
