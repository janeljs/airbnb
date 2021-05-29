package airbnb.exception;

public class RoomNotFoundException extends EntityNotFoundException {
    public RoomNotFoundException() {
        super("Room not found.");
    }
}
