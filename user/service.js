export const testResponse = (arr) => {
    return arr;
}

export const testPost = (body) => {
    body.save()
    return body;
}

export const testDelete = (id) => {
    return {_id : id};
}