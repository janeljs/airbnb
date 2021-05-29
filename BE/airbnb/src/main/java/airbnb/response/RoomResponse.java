package airbnb.response;

import airbnb.domain.RoomAndBedOption;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.util.List;

@Getter
@Builder
public class RoomResponse {
    @JsonIgnore
    private final String city;
    private final String location;
    private final String propertyType;
    private final List<String> roomImages;
    private final Double averageRating;
    private final String title;
    private final Integer maximumNumberOfGuests;
    private final RoomAndBedOption roomAndBedOption;
    private final List<String> amenities;
    private final Integer pricePerNight;
}
