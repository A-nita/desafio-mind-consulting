import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';

import { IFindUserRepository } from '../repository/users/interfaces';

export default (findUserRepository: IFindUserRepository) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };

  passport.use('jwt', new JwtStrategy(opts, async function(jwtPayload, done) {
    const user = await findUserRepository.findUser({ email: jwtPayload.email });

    if (!user) {
      return done(null, false);
    }

    return done(null, { id: user.id, email: user.email, admin: user.admin, name: user.name });
  }));
};
