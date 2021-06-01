package airbnb.auth.jwt;

import airbnb.auth.annotation.LoginRequired;
import airbnb.auth.exception.HttpProtocolViolationException;
import airbnb.domain.User;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static airbnb.auth.GithubConstants.*;
import static airbnb.auth.GithubConstants.GITHUB_AVATAR_URL;

@Component
@RequiredArgsConstructor
public class JwtAuthInterceptor implements HandlerInterceptor {
    private final JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (loginRequired(handler)) {
            verifyJwt(request);
        }
        return true;
    }

    private void verifyJwt(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        verifyHeader(header);

        Jwt jwt = new Jwt(header.substring("Bearer".length()).trim());
        DecodedJWT decodedJWT = jwtUtil.verifyToken(jwt);

        User user = createUserFromJwt(decodedJWT);

        request.setAttribute("user", user);
    }

    private User createUserFromJwt(DecodedJWT jwt) {
        return User.builder()
                .name(jwt.getClaim(GITHUB_NAME).asString())
                .email(jwt.getClaim(GITHUB_EMAIL).asString())
                .githubId(jwt.getClaim(GITHUB_ID).asString())
                .profileImage(jwt.getClaim(GITHUB_AVATAR_URL).asString())
                .build();
    }

    private boolean loginRequired(Object handler) {
        return handler instanceof HandlerMethod
                && ((HandlerMethod) handler).hasMethodAnnotation(LoginRequired.class);
    }

    private void verifyHeader(String header) {
        if (header == null || !header.startsWith("Bearer")) {
            throw new HttpProtocolViolationException();
        }
    }
}
