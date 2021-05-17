package airbnb.requestDTO;

import lombok.Getter;

@Getter
public class ReservationRequest {
    String checkIn;
    String checkOut;
    int adults;
    int children;
    int infants;
    int totalPrice;
}
