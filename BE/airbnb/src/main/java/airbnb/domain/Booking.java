package airbnb.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

import java.time.LocalDate;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn
    private User user;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn
    private Room room;

    @Embedded
    private Guest guest;

    private LocalDate checkIn;
    private LocalDate checkOut;
}
