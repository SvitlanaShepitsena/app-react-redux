import { backgroundImagesPrefix } from '../config';

const NUMBER_OF_BACKGROUNDS = 12;

export default {
    formatArticle(article, author) {
        return {
            id                   : article.id,
            name                 : article.name,
            linkToPass           : article.linkToPass,
            publicLink           : article.publicLink,
            actionId             : article.links ? article.links.action.id : '',
            numberOfQuestions    : article.numberOfQuestions,
            numberOfUsersPassed  : article.numberOfPeople,
            dueTime              : article.dueTime,
            message              : article.message,
            isSponsored          : article.isSponsored,
            isPrivate            : article.isPublic === false,
            isPassed             : article.assigneeQuizSession && article.assigneeQuizSession.finishedAt,
            userQuizSession      : this.formatUserQuizSession(article.assigneeQuizSession),
            pictureURL           : article.pictureURL,
            backgroundURL        : article.backgroundURL || this._getBackgpoundURLById(article.id),
            tags                 : article.tags,
            timeToPass           : article.timeToPass,
            author               : author ? this.formatUserInfo(author) : {}
        };
    },

    formatUserInfo(user) {
        return {
            id          : user.id,
            isTrusted   : user.isTrusted,
            type        : user.type,
            fullName    : this._getUserFullName(user),
            avatar      : user.image
        };
    },

    formatAuthorProfileData(user) {
        return {
            id          : user.id,
            country     : user.country,
            city        : user.city,
            industry    : user.industry,
            isTrusted   : user.isTrusted,
            type        : user.type,
            firstName   : user.firstName,
            secondName  : user.secondName,
            lastName    : user.lastName,
            companyName : user.companyName,
            pictureURL  : user.image
        };
    },

    formatUserQuizSession(session) {
        if (!session || !session.createdAt) {
            return null;
        }

        const userGainedPoints = Math.ceil(+session.gainedPoints * 100) / 100 || 0;
        const userScore = Math.ceil(+userGainedPoints * 100 / +session.maxPoints);

        return {
            canViewAnswers  : session.canAssigneeViewQuestions,
            startedAt       : session.startedAt,
            shareResultLink : session.resultShareLink || '',
            finishedAt      : session.finishedAt,
            score           : userScore,
            gainedPoints    : userGainedPoints,
            maxPoints       : session.maxPoints,
            status          : session.status,
            id              : session.id,
            grade           : this._getResultGrade(userScore)
        };
    },

    _getUserFullName(user) {
        return user.type === 'COMPANY' ? user.companyName : `${user.firstName} ${user.secondName}`;
    },

    _getResultGrade(score) {
        if (score > 95) {
            return 'excellent';
        }

        if (score > 75) {
            return 'good';
        }

        if (score > 50) {
            return 'normal';
        }

        if (score > 30) {
            return 'bad';
        }

        return 'verybad';
    },

    _getBackgpoundURLById(id) {
        const number = parseInt(id, 16);
        const backgroundNumber = number % NUMBER_OF_BACKGROUNDS + 1;
        return `${backgroundImagesPrefix}${backgroundNumber}.jpg`;
    }
};
