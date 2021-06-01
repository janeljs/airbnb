package airbnb.domain;

import airbnb.response.BookingResponse;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.stream.Collectors;

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
    @ManyToOne(fetch = LAZY, cascade = CascadeType.ALL)
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

    private Integer totalPrice;

    public static BookingResponse createBookingResponse(Booking booking) {
        return BookingResponse.builder()
                .name(booking.room.getName())
                .roomImages(booking.room.getImages().stream().map(Image::getImage).collect(Collectors.toList()))
                .place(booking.room.getLocation().getPlaceId())
                .host(booking.room.getHost().getName())
                .checkIn(LocalDateTime.of(booking.checkIn, booking.room.getRule().getCheckInTime()))
                .checkOut(LocalDateTime.of(booking.checkOut, booking.room.getRule().getCheckOutTime()))
                .numberOfGuests(booking.guest.numberOfGuests())
                .totalPrice(booking.totalPrice)
                .build();
    }
}
