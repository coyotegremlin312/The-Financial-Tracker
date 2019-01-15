import moment from 'moment';

export default (debts, { text, sortBy, startDate, endDate}) => {
    return debts.filter((debt) => {
        const createdAtMoment = moment(debt.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = debt.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch  && textMatch;
    }).sort((a, b) => {
            return a.createdAt < b.createdAt ? 1 : -1;
        } 
    )
};