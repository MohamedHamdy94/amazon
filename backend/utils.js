import jwt, { decode } from "jsonwebtoken"

export const generateToken = (user) => {//incr

    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET, {
        expiresIn: '7d',
    })
}

export const generateAdminToken = (admin) => {

    return jwt.sign(
        {
            _id: admin._id,
            name: admin.name,
            email: admin.email,
        },
        process.env.JWT_SECRET, {
        expiresIn: '7d',
    })
}

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                res.status(401).send({ message: 'Invalid Token' })
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.status(401).send({ message: "no Token" })
    }
}

export const isAdminAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                res.status(401).send({ message: 'Invalid Token' })
            } else {
                req.admin = decode;
                next();
            }
        });
    } else {
        res.status(401).send({ message: "no Token" })
    }
}
