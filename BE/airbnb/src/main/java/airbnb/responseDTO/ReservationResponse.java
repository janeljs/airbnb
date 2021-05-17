package airbnb.responseDTO;

import lombok.Getter;

@Getter
public class ReservationResponse {
    String place;
    String host;
    String checkIn;
    String checkOut;
    int numberOfGuests;
    int totalPrice;

    public ReservationResponse(String place, String host, String checkIn, String checkOut, int numberOfGuests, int totalPrice) {
        this.place = place;
        this.host = host;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.numberOfGuests = numberOfGuests;
        this.totalPrice = totalPrice;
    }
}
