package airbnb.response;

import airbnb.domain.Host;
import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
public class RoomDetailPageResponse {
    private List<String> roomImages = new ArrayList<>();
    private String title;
    private String roomDescription;
    private double averageRating;
    private Host host;
    private int pricePerNight;
}
