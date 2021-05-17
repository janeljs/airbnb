package airbnb.responseDTO;

import lombok.Getter;

@Getter
public class RoomResponse {
    private double rating;
    private String title;
    private int pricePerNight;

    public RoomResponse(double rating, String title, int pricePerNight) {
        this.rating = rating;
        this.title = title;
        this.pricePerNight = pricePerNight;
    }
}
