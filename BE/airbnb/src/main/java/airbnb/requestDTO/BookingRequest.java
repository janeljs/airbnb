package airbnb.requestDTO;

import lombok.Getter;

@Getter
public class BookingRequest {
    String checkIn;
    String checkOut;
    int adults;
    int children;
    int infants;
    int totalPrice;
}
