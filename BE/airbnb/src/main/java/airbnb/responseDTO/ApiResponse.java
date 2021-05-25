package airbnb.responseDTO;

import airbnb.domain.Category;
import airbnb.domain.City;
import lombok.Getter;

import java.util.List;

@Getter
public class ApiResponse {
    List<String> backgroundImages;
    List<City> nearbyDestinations;
    List<Category> liveAnywhere;

    public ApiResponse(List<String> backgroundImages, List<City> nearbyDestinations, List<Category> liveAnywhere) {
        this.backgroundImages = backgroundImages;
        this.nearbyDestinations = nearbyDestinations;
        this.liveAnywhere = liveAnywhere;
    }
}
