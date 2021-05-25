package airbnb.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Embeddable
@NoArgsConstructor
@Getter
public class Location {
    private double latitude;
    private double longitude;
    private String city;
    private String street;
}
