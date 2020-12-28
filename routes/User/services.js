import { User } from '../../data';
import { generateToken } from '../../security/Jwt';
import { ServerError } from '../../errors';
import { hash, compare } from '../../security/Password';

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

export default {
    register,
    login
}