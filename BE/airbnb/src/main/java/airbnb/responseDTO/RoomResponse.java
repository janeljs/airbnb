package airbnb.responseDTO;

import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class RoomResponse {
    private List<String> roomImages = new ArrayList<>();
    private double rating;
    private String title;
    private int pricePerNight;

    public RoomResponse(List<String> roomImages, double rating, String title, int pricePerNight) {
        this.roomImages = roomImages;
        this.rating = rating;
        this.title = title;
        this.pricePerNight = pricePerNight;
    }
}
