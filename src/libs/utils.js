import * as moment from 'moment'

const buildArray = (max, min = 1) => {
    const array = []

    for (var i = min; i <= max; i++) {
        array.push(i)
    }

    return array
}

const formatOnlyDate = (date) => {
    const newDate = [date.year, date.month-1, date.day]
    return moment(newDate).format("YYYY-MM-DD")
}

const formatDateToDefault = (dates, hour) => {
    const date = [dates.year, dates.month-1, dates.day, hour]
    return moment(date).format("YYYY-MM-DDTHH:mm")
}

const formatDateToBr = (date) => {
    return moment(date).format("DD/MM/YYYY HH:mm")
}

export { buildArray, formatDateToDefault, formatDateToBr, formatOnlyDate }