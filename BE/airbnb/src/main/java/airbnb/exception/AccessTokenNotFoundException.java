package airbnb.exception;

public class AccessTokenNotFoundException extends EntityNotFoundException{
    public AccessTokenNotFoundException() {
        super("Access token not found.");
    }
}
