class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    };

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error('This article model is not included in this gallery!');
        };

        let article = this.listOfArticles.find(a => a.articleName == articleName);

        if (article && article.articleModel == articleModel) {
            article.quantity += Number(quantity);
        } else {
            let newArticle = {
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: Number(quantity),
            }
            this.listOfArticles.push(newArticle);
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    };

    inviteGuest(guestName, personality) {
        let guest = this.guests.find(g => g.guestName == guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            let currentPoints = 0;

            if (personality == 'Vip') {
                currentPoints = 500;
            } else if (personality == 'Middle') {
                currentPoints = 250;
            } else {
                currentPoints = 50;
            }

            let newGuest = {
                guestName: guestName,
                points: currentPoints,
                purchaseArticle: 0,
            }

            this.guests.push(newGuest);
            return `You have successfully invited ${guestName}!`;
        }
    };

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(a => a.articleName == articleName);
        if (!article || article.articleModel != articleModel) {
            throw new Error('This article is not found.');
        };

        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        };

        let guest = this.guests.find(g => g.guestName == guestName);
        if (!guest) {
            return 'This guest is not invited.';
        };

        if (guest.points >= this.possibleArticles[articleModel]) {
            guest.points -= article.points;
            guest.purchaseArticle++;
            article.quantity--;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
        } else {
            return 'You need to more points to purchase the article.';
        }
    };

    showGalleryInfo(criteria) {
        let result = [];

        if (criteria == 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(article => {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            });
        } else if (criteria == 'guest') {
            result.push('Guests information:');
            this.guests.forEach(guest => {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            });
        }

        return result.join('\n');
    }
}



