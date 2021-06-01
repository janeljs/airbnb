package airbnb.exception;

public class RoomNotFoundException extends NotFoundException {
    public RoomNotFoundException() {
        super("Room not found.");
    }
}
