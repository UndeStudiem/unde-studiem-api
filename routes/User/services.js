const { User } = require('../../data')
const { generateToken } = require('../../security/Jwt');
const { ServerError } = require('../../errors/server_errors');
const { hash, compare } = require('../../security/Password');

const register = async (username, password) => {
    const hashedPassword = await hash(password);
    const role = username === 'admin' ? 'admin' : 'user';
    const user = new User({
        username,
        password: hashedPassword,
        role
    });
    await user.save();
};

const login = async (username, password) => {
    const user = await User.findOne({ username });
    if (user === null) {
        throw new ServerError(`Utilizatorul inregistrat cu ${username} nu exista!`, 404);
    }
    User.fin
    if (await compare(password, user.password)) {
        return await generateToken({
            userId: user._id,
            userRole: user.role
        });
    } 
    throw new ServerError("Combinatia de username si parola nu este buna!", 404);
};

module.exports = {
    register,
    login
}