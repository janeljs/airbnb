package airbnb.auth;

import airbnb.domain.User;
import airbnb.exception.UserNotFoundException;
import airbnb.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    private final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private final AuthService authService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    @GetMapping("/social/callback/github")
    public Jwt getJwt(String code) {
        AccessTokenResponse accessToken = authService.getAccessTokenFrom(code);
        logger.info("accessToken: {}", accessToken.getAccessToken());
        GitHubUser gitHubUser = authService.getGitHubUserFrom(accessToken.getAccessToken());
        User user = userRepository.findByGithubId(gitHubUser.getLogin()).orElseThrow(UserNotFoundException::new);
        logger.info("user: {}", user.toString());
        return jwtUtil.getJwt(user);
    }
}
