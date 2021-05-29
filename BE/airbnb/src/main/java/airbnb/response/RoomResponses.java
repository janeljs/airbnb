package airbnb.response;

import airbnb.domain.City;
import com.google.common.collect.Lists;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
public class RoomResponses {
    Map<String, List<RoomResponse>> filteredRooms;

    public RoomResponses(Map<String, List<RoomResponse>> filteredRooms) {
        this.filteredRooms = filteredRooms;
    }

    public static RoomResponses getRoomsCategorizedByCity(List<RoomResponse> roomResponses) {
        List<String> cities = roomResponses.stream()
                .map(RoomResponse::getCity).collect(Collectors.toList());
        Map<String, List<RoomResponse>> cityRoomWrapped = new HashMap<>();

        for (String city : cities) {
            cityRoomWrapped.put(city, Lists.newArrayList());
        }

        for (RoomResponse room : roomResponses) {
            if (cityRoomWrapped.containsKey(room.getCity())) {
                cityRoomWrapped.get(room.getCity()).add(room);
            }
        }
        return new RoomResponses(cityRoomWrapped);
    }
}
