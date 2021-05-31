package airbnb.response;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
public class BookingResponse {
    private final String name;
    private final List<String> roomImages;
    private final String place;
    private final String host;
    private final LocalDateTime checkIn;
    private final LocalDateTime checkOut;
    private final int numberOfGuests;
    private final int totalPrice;
}
