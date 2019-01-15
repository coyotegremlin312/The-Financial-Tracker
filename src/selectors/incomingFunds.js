import moment from 'moment';

export default (incomingFunds, { text, sortBy, startDate, endDate}) => {
    return incomingFunds.filter((incomingFund) => {
        const createdAtMoment = moment(incomingFund.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = incomingFund.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch  && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};