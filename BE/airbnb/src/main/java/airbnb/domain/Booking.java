package airbnb.domain;

import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Booking {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn
    private User user;

    @ManyToOne(fetch = LAZY)
    @JoinColumn
    private Room room;

    int adults;
    int children;
    int infants;

    int pricePerNight;
    String checkInTime;
    String checkOutTime;
}
