package airbnb.controller;

import airbnb.request.SearchRequest;
import airbnb.response.RoomDetailPageResponse;
import airbnb.response.RoomResponses;
import airbnb.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class RoomController {
    private final RoomService roomService;

    @GetMapping("/rooms")
    public ResponseEntity<RoomResponses> search(SearchRequest searchRequest) {
        return ResponseEntity.ok(roomService.findRoomsFilteredBy(searchRequest));
    }

    @GetMapping("/rooms/{roomId}")
    public ResponseEntity<RoomDetailPageResponse> viewDetailPage(@PathVariable Long roomId) {
        return ResponseEntity.ok(roomService.findRoomDetailPageById(roomId));
    }
}
