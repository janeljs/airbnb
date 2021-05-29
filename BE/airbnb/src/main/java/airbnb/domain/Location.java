package airbnb.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Embeddable
@NoArgsConstructor
@Getter
public class Location {
    private String placeId;
    private double latitude;
    private double longitude;
}
