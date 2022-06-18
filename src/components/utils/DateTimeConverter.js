

export const DateTimeConverter = (object) => {
    const dateString = object.date
    const extractor = new Date(dateString)
    const date = (extractor.getMonth() + 1) + '/' + extractor.getDate() + '/' + extractor.getFullYear() + '-' + extractor.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return date
}