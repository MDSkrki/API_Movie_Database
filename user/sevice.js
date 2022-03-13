export const testResponse = () => {
    return 'Response successful';
}

export const testPost = (body) => {
    body.save()
    return body;
}