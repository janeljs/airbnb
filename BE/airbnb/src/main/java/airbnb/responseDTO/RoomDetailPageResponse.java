package airbnb.responseDTO;

import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class RoomDetailPageResponse {
    private List<String> roomImages = new ArrayList<>();
    private String title;
    private String roomDescription;
    private double rating;
    private String host;
    private String hostImage;
    private int pricePerNight;

    public RoomDetailPageResponse(List<String> roomImages, String title, String roomDescription, double rating, String host, String hostImage, int pricePerNight) {
        this.roomImages = roomImages;
        this.title = title;
        this.roomDescription = roomDescription;
        this.rating = rating;
        this.host = host;
        this.hostImage = hostImage;
        this.pricePerNight = pricePerNight;
    }
}
