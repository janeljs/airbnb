package airbnb.domain;

import lombok.Getter;

import javax.persistence.*;


@Embeddable
@Getter
public class Amenity {
    private boolean kitchen;
    private boolean wifi;
    private boolean airConditioning;
    private boolean dryer;
}
