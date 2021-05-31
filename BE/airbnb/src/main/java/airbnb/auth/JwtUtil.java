package airbnb.auth;

import airbnb.domain.User;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    private static final String ISSUER = "airbnb";
    private final String SECRET_KEY;

    public JwtUtil(@Value("${jwt.secret_key}") String SECRET_KEY) {
        this.SECRET_KEY = SECRET_KEY;
    }

    public Jwt getJwt(User user) {
        String token = com.auth0.jwt.JWT.create()
                .withClaim("id", user.getId())
                .withClaim("email", user.getEmail())
                .withClaim("githubId", user.getGithubId())
                .withIssuer(ISSUER)
                .sign(Algorithm.HMAC256(SECRET_KEY));
        return new Jwt(token);
    }
}
