package airbnb.service;

import airbnb.auth.GithubUser;
import airbnb.domain.User;
import airbnb.exception.UserNotFoundException;
import airbnb.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;

    public User findLoginUser(GithubUser githubUser) {
        if (!isDuplicate(githubUser)) {
            logger.debug("{}님이 회원가입하셨습니다.", githubUser.getGithubId());
            User user = GithubUser.createUser(githubUser);
            userRepository.save(user);
            return user;
        }
        return userRepository.findByGithubId(githubUser.getGithubId()).orElseThrow(UserNotFoundException::new);
    }

    private boolean isDuplicate(GithubUser githubUser) {
        return userRepository.findByGithubId(githubUser.getGithubId()).isPresent();
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    public User findUserByGithubId(String gitHubId) {
        return userRepository.findByGithubId(gitHubId).orElseThrow(UserNotFoundException::new);
    }


}
