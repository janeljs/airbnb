package airbnb.auth.exception;


public class HttpProtocolViolationException extends AuthenticationFailedException {
    public HttpProtocolViolationException() {
        super("Incorrectly formed response headers.");
    }
}
