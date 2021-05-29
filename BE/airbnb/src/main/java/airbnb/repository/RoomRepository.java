package airbnb.repository;

import airbnb.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RoomRepository extends JpaRepository<Room, Long>, CustomizedRoomRepository {
}
