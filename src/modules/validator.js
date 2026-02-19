export function validation(title){
    const regex = /^[a-za-z0-9\s]{5,50}$/;
    return regex.test(title);
}