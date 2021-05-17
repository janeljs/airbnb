package airbnb.controller;

import airbnb.requestDTO.ReservationRequest;
import airbnb.responseDTO.ReservationResponse;
import airbnb.responseDTO.RoomDetailPageResponse;
import airbnb.responseDTO.RoomResponse;
import airbnb.domain.City;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AirbnbController {

    @GetMapping
    public ResponseEntity<List<City>> home() {
        List<City> nearbyDestinations = new ArrayList<>();
        City city1 = new City("서울", 2.5, "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240");
        City city2 = new City("인천", 1, "https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240");
        nearbyDestinations.add(city1);
        nearbyDestinations.add(city2);
        return new ResponseEntity<>(nearbyDestinations, HttpStatus.OK);
    }

    @GetMapping("/search/rooms")
    public ResponseEntity<Map<String, List<RoomResponse>>> search(
            @RequestParam Long placeId,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkIn,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkOut,
            @RequestParam int priceMin,
            @RequestParam int priceMax,
            @RequestParam int adults,
            @RequestParam int children,
            @RequestParam int infants) {
        Map<String, List<RoomResponse>> filteredRooms = new HashMap<>();
        RoomResponse room1 = new RoomResponse(4.23, "제인네집", 994375);
        RoomResponse room2 = new RoomResponse(4.73, "갯배도보5분/스카이씨리조트1316호", 114375);
        RoomResponse room3 = new RoomResponse(4.7, "Seoul Sunday House", 85000);
        List<RoomResponse> incheon = new ArrayList<>();
        List<RoomResponse> seoul = new ArrayList<>();
        incheon.add(room1);
        incheon.add(room2);
        seoul.add(room3);
        filteredRooms.put("서울", seoul);
        filteredRooms.put("인천", incheon);
        return new ResponseEntity<>(filteredRooms, HttpStatus.OK);
    }

    @GetMapping("/rooms/{roomId}")
    public ResponseEntity viewDetailPage(@PathVariable Long roomId) {
        List<String> roomImages = new ArrayList<>();
        roomImages.add("http://image1");
        roomImages.add("http://image2");
        roomImages.add("http://image3");
        roomImages.add("http://image4");
        String title = "Seoul Sunday House (동대문/동묘역 가족 친구여행 2인기준, 주차 불가)";
        String roomDescription = "서울 동대문 상가 위치에 있고 ,도매시장 두타 면세점 ,동묘역 빈티지시장 등 과 가깝습니다. 공항버스랑 지하철 역 도보 5분입니다\n" +
                "성인 2명 가격기준, 아이 6살 이하 무료,성인 한명 추가시 20000 원 추가 됩니다.";
        double rating = 4.7;
        String host = "제인";
        String hostImage = "http://image/profile";
        int pricePerNight = 85000;
        RoomDetailPageResponse detailPage = new RoomDetailPageResponse(roomImages, title, roomDescription, rating, host, hostImage, pricePerNight);
        return ResponseEntity.ok(detailPage);
    }

    @PostMapping("/login")
    public String login(String code) {
        // 프론트에서 받은 authorization code, redirect uri, client id, client secret를 resource server에 전달
        // resource server에서 응답으로 받은 accessToken을 저장
        // Authorization bearer에 access token 담기
        String jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        return jwt;
    }

    @PostMapping("/book/rooms/{roomId}")
    public ResponseEntity<ReservationResponse> reserve(@PathVariable Long roomId, @RequestBody ReservationRequest reservationInfo) {
        String place = "서초구, 서울, 한국";
        String roomName = "Seoul Sunday House"; // roomId로 조회
        String checkInTime = "오후 04:00";
        String checkOutTime = "오후 12:00";
        String host = "제인";
        String checkIn = reservationInfo.getCheckIn() + " " + checkInTime;
        String checkOut = reservationInfo.getCheckOut() + " " + checkOutTime;
        int numberOfGuests = reservationInfo.getAdults() + reservationInfo.getChildren() + reservationInfo.getInfants();
        int totalPrice = reservationInfo.getTotalPrice();
        ReservationResponse reservationResponse = new ReservationResponse(place, host, checkIn, checkOut, numberOfGuests, totalPrice);
        return new ResponseEntity<>(reservationResponse, HttpStatus.OK);
    }

    @DeleteMapping("/cancel/rooms/{roomId}")
    public ResponseEntity<String> cancel() {
        return new ResponseEntity<>("예약이 성공적으로 취소되었습니다.", HttpStatus.OK);
    }

    @PostMapping("/wish/rooms/{roomId}")
    public ResponseEntity wish() {
        return new ResponseEntity("저장 완료", HttpStatus.OK);
    }

    @GetMapping("/wishlist")
    public ResponseEntity viewWishList() {
        List<RoomResponse> wishList = new ArrayList<>();
        RoomResponse room1 = new RoomResponse(4.73, "갯배도보5분/스카이씨리조트1316호", 114375);
        RoomResponse room2 = new RoomResponse(4.23, "제인네집", 994375);
        wishList.add(room1);
        wishList.add(room2);
        return ResponseEntity.ok(wishList);
    }
}
