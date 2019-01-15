import moment from 'moment';

export default (assets, { text, sortBy, startDate, endDate}) => {
    return assets.filter((asset) => {
        const createdAtMoment = moment(asset.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = asset.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch  && textMatch;
    }).sort((a, b) => {
            return a.createdAt < b.createdAt ? 1 : -1;
        } 
    )
};