package airbnb.service;

import airbnb.domain.Booking;
import airbnb.domain.Room;
import airbnb.domain.User;
import airbnb.exception.BookingNotFoundException;
import airbnb.repository.BookingRepository;
import airbnb.request.BookingRequest;
import airbnb.response.BookingResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final BookingRepository bookingRepository;

    public Booking findBookingById(Long bookingId) {
        return bookingRepository.findById(bookingId).orElseThrow(BookingNotFoundException::new);
    }

    public BookingResponse reserve(User user, Room room, BookingRequest reservationInfo) {
        Booking booking = Room.createBooking(user, room, reservationInfo);
        bookingRepository.save(booking);
        return Booking.createBookingResponse(booking);
    }

    public void cancel(Long bookingId) {
        bookingRepository.deleteById(bookingId);
    }
}
