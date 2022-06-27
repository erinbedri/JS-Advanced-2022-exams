class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    };

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`; 
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    };

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`); 
        } 

        if (this.resources === 0) {
            throw new Error('You don\'t have enough resources to start the hike'); 
        }

        let difference = this.resources - (time * 10);

        if (difference < 0) {
            return 'You don\'t have enough resources to complete the hike';
        }

        let newHike = {
            peak,
            time,
            difficultyLevel
        }

        this.resources -= time * 10;
        this.listOfHikes.push(newHike);

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    };

    rest(time) {
        let rest = time * 10;

        this.resources += rest;

        if (this.resources >= 100) {
            this.resources = 100;
            return 'Your resources are fully recharged. Time for hiking!';
        }

        return `You have rested for ${time} hours and gained ${time*10}% resources`
    };

    showRecord(criteria) {
        let result = [];

        if (this.listOfHikes.length === 0) {
            return `${username} has not done any hiking yet`;
        }

        if (criteria === 'all') {
            result.push('All hiking records:');

            for (const hike of this.listOfHikes) {
                result.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            }

        } else if (criteria === 'hard') {
            let hikes = this.listOfHikes.filter(h => h.difficultyLevel === criteria);

            if (hikes.length === 0) {
                result.push(`${this.username} has not done any ${criteria} hiking yet`); 
            } else {
                Array.prototype.hasMin = function(attrib) {
                    return (this.length && this.reduce(function(prev, curr){ 
                        return prev[attrib] < curr[attrib] ? prev : curr; 
                    })) || null;
                 }

                 let best = this.listOfHikes.hasMin('time')
                 result.push(`${this.username}'s best ${criteria} hike is ${best.peak} peak, for ${best.time} hours`);
            }

        } else if (criteria === 'easy') {
            let hikes = this.listOfHikes.filter(h => h.difficultyLevel === criteria);

            if (hikes.length === 0) {
                result.push(`${this.username} has not done any ${criteria} hiking yet`); 
            } else {
                Array.prototype.hasMin = function(attrib) {
                    return (this.length && this.reduce(function(prev, curr){ 
                        return prev[attrib] < curr[attrib] ? prev : curr; 
                    })) || null;
                 }

                 let best = this.listOfHikes.hasMin('time')
                 result.push(`${this.username}'s best ${criteria} hike is ${best.peak} peak, for ${best.time} hours`);
            }
        }
        
        return result.join(`\n`);
    };
}



