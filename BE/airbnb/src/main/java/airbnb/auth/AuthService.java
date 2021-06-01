package airbnb.auth;

import airbnb.auth.exception.AccessTokenNotFoundException;
import airbnb.auth.jwt.Jwt;
import airbnb.auth.jwt.JwtUtil;
import airbnb.domain.User;
import airbnb.exception.UserNotFoundException;
import io.netty.resolver.DefaultAddressResolverGroup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

@Service
public class AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    @Value("${github.client.id}")
    private String CLIENT_ID;

    @Value("${github.client.secret}")
    private String CLIENT_SECRET;

    @Value("${github.redirect.uri}")
    private String REDIRECT_URI;

    @Value("${github.access.token.uri}")
    private String ACCESS_TOKEN_URI;

    @Value("${github.user.uri}")
    private String USER_URI;

    private final HttpClient httpClient = HttpClient.create().resolver(DefaultAddressResolverGroup.INSTANCE);
    private final WebClient webClient = WebClient.builder().clientConnector(new ReactorClientHttpConnector(httpClient)).build();

    public String getAccessToken(String code) {
        AccessTokenResponse accessTokenResponse = issueAccessToken(code);
        return accessTokenResponse.getAccessToken();
    }

    private AccessTokenResponse issueAccessToken(String code) {
        AccessTokenRequest accessTokenRequest = AccessTokenRequest.builder()
                .clientId(CLIENT_ID)
                .clientSecret(CLIENT_SECRET)
                .code(code)
                .redirectUri(REDIRECT_URI)
                .build();
        return webClient.post()
                .uri(ACCESS_TOKEN_URI)
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(accessTokenRequest)
                .retrieve()
                .bodyToMono(AccessTokenResponse.class).blockOptional()
                .orElseThrow(AccessTokenNotFoundException::new);
    }

    public GithubUser getGithubUser(String accessToken) {
        return webClient.get()
                .uri(USER_URI)
                .accept(MediaType.APPLICATION_JSON)
                .header("Authorization", "token " + accessToken)
                .retrieve()
                .bodyToMono(GithubUser.class)
                .blockOptional()
                .orElseThrow(() -> new UserNotFoundException("GitHub user not found."));
    }
}
