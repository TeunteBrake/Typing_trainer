module.exports = {
    name: 'string',
    textString: '',
    description: 'this generates a random string',
    execute(){
        this.textString = generateString(10)
    }
}
function generateString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}