package airbnb.auth.exception;

public class AccessTokenNotFoundException extends AuthenticationFailedException {
    public AccessTokenNotFoundException() {
        super("Access token not found.");
    }
}
