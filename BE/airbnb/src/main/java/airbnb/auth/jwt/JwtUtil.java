package airbnb.auth.jwt;

import airbnb.domain.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

import static airbnb.auth.GithubConstants.*;

@Service
@NoArgsConstructor
public class JwtUtil {
    @Value("${jwt.issuer}")
    private String ISSUER;

    @Value("${jwt.secret_key}")
    private String SECRET_KEY;

    public String createQueryString(User user) {
        Jwt jwt = createToken(user);
        return "?jwt="+jwt.getJwt()+"&profile_url="+user.getProfileImage();
    }

    public Jwt createToken(User user) {
        String token = JWT.create()
                .withClaim(GITHUB_NAME, user.getName())
                .withClaim(GITHUB_EMAIL, user.getEmail())
                .withClaim(GITHUB_ID, user.getGithubId())
                .withClaim(GITHUB_AVATAR_URL, user.getProfileImage())
                .withIssuer(ISSUER)
                .withExpiresAt(new Date())
                .sign(Algorithm.HMAC256(SECRET_KEY));
        return new Jwt(token);
    }

    public DecodedJWT verifyToken(Jwt jwt) {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET_KEY))
                .acceptExpiresAt(10 * 60 * 60)
                .withIssuer(ISSUER)
                .build();
        return verifier.verify(jwt.getJwt());
    }
}
