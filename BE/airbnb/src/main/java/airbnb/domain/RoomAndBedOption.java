package airbnb.domain;

import lombok.Getter;


import javax.persistence.Embeddable;

@Getter
@Embeddable
public class RoomAndBedOption {
    private Integer beds;
    private Integer bedRooms;
    private Integer bathRooms;
}
