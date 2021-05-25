package airbnb.responseDTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class BookingResponse {
    private List<String> roomImages = new ArrayList<>();
    String place;
    String host;
    String checkIn;
    String checkOut;
    int numberOfGuests;
    int totalPrice;

    public BookingResponse(List<String> roomImages, String place, String host, String checkIn, String checkOut, int numberOfGuests, int totalPrice) {
        this.roomImages = roomImages;
        this.place = place;
        this.host = host;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.numberOfGuests = numberOfGuests;
        this.totalPrice = totalPrice;
    }
}
