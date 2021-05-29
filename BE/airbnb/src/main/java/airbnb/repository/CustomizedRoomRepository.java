package airbnb.repository;

import airbnb.domain.Room;
import airbnb.request.SearchRequest;

import java.util.List;

public interface CustomizedRoomRepository {
    List<Room> findRoomsFilteredBy(SearchRequest searchRequest);
}
