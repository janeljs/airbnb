package airbnb.domain;


import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Host {
    @Id
    private Long id;

    private String name;
    private String profileImage;
    private int numberOfReviews;

    @OneToMany(mappedBy = "host", cascade = CascadeType.ALL)
    private List<Room> rooms = new ArrayList<>();
}
