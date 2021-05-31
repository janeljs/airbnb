package airbnb.request;

import airbnb.domain.Guest;
import lombok.Getter;

@Getter
public class BookingRequest {
    private String checkIn;
    private String checkOut;
    private int adults;
    private int children;
    private int infants;
    private int totalPrice;

    public static Guest createGuest(BookingRequest bookingRequest) {
        return Guest.builder()
                .adults(bookingRequest.adults)
                .children(bookingRequest.children)
                .infants(bookingRequest.infants)
                .build();
    }
}
