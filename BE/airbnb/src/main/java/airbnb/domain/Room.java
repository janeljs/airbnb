package airbnb.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;


@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {
    @Id
    private Long id;

    private String name;

    @Embedded
    private Location location;

    @ManyToOne(fetch = LAZY)
    @JoinColumn
    private Host host;

    private double averageRating;
    private boolean wish;

    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;

    @Enumerated(EnumType.STRING)
    private Amenity amenity;

    @ElementCollection
    @CollectionTable(name = "image", joinColumns = @JoinColumn(name = "room_id"))
    private final List<Image> images = new ArrayList<>();

    public Room(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
