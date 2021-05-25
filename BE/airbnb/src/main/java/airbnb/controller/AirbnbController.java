package airbnb.controller;

import airbnb.domain.Category;
import airbnb.requestDTO.BookingRequest;
import airbnb.responseDTO.ApiResponse;
import airbnb.responseDTO.BookingResponse;
import airbnb.responseDTO.RoomDetailPageResponse;
import airbnb.responseDTO.RoomResponse;
import airbnb.domain.City;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AirbnbController {

    @GetMapping
    public ResponseEntity<ApiResponse> home() {
        List<String> backgroundImages = getBackgroundImages();
        List<City> nearbyDestinations = getNearbyDestinations();
        List<Category> liveAnywhere = getLiveAnywhere();
        ApiResponse apiResponse = new ApiResponse(backgroundImages, nearbyDestinations, liveAnywhere);
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }

    private List<Category> getLiveAnywhere() {
        List<Category> liveAnywhere = new ArrayList<>();
        Category category1 = new Category("자연을 만끽할 수 있는 숙소", "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480");
        Category category2 = new Category("독특한 공간", "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480");
        Category category3 = new Category("집 전체", "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480");
        Category category4 = new Category("반려동물 동반 가능", "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480");
        liveAnywhere.add(category1);
        liveAnywhere.add(category2);
        liveAnywhere.add(category3);
        liveAnywhere.add(category4);
        return liveAnywhere;
    }

    private List<String> getBackgroundImages() {
        List<String> backgroundImages = new ArrayList<>();
        backgroundImages.add("https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560");
        backgroundImages.add("https://a0.muscache.com/im/pictures/4e9fc041-1c7e-4f2d-b2bd-52c9cdc6a512.jpg?im_w=1440");
        backgroundImages.add("https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=960");
        backgroundImages.add("https://a0.muscache.com/im/pictures/b65bef33-07be-4c55-b613-bb990193e8f6.jpg?im_q=highq&im_w=720");
        return backgroundImages;
    }

    private List<City> getNearbyDestinations() {
        List<City> nearbyDestinations = new ArrayList<>();
        City city1 = new City("서울", "2.5시간", "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240");
        City city2 = new City("인천", "30분", "https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240");
        City city3 = new City("의정부시", "45분", "https://a0.muscache.com/im/pictures/f98fbb2e-9e10-4514-b4a7-02c467e1da03.jpg?im_q=medq&im_w=240");
        City city4 = new City("대구", "4시간", "https://a0.muscache.com/im/pictures/f7736f4a-f8b9-4527-b46c-d0d8df856984.jpg?im_q=medq&im_w=240");
        City city5 = new City("대전", "5시간", "https://a0.muscache.com/im/pictures/a0eb36e7-b468-4c5e-93b2-819e793563b2.jpg?im_q=medq&im_w=240");
        City city6 = new City("광주", "4시간", "https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240");
        City city7 = new City("수원시", "1.5시간", "https://a0.muscache.com/im/pictures/926d56aa-8b36-4138-8eae-ad991868b858.jpg?im_q=medq&im_w=240");
        City city8 = new City("울산", "4.5시간", "https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240");
        nearbyDestinations.add(city1);
        nearbyDestinations.add(city2);
        nearbyDestinations.add(city3);
        nearbyDestinations.add(city4);
        nearbyDestinations.add(city5);
        nearbyDestinations.add(city6);
        nearbyDestinations.add(city7);
        nearbyDestinations.add(city8);
        return nearbyDestinations;
    }

    @GetMapping("/priceList")
    public Map<Integer, Integer> getPriceDistribution() {
        int minPrice = 1000;
        int maxPrice = 1000000;
        Map<Integer, Integer> graph = new LinkedHashMap<>();
        for (int i = minPrice; i < maxPrice; i++) {
            i += 10000;
            graph.put(i, (int) (Math.random() * 300 + 1));
        }
        return graph;
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
        List<String> room1images = new ArrayList<>();
        room1images.add("https://a0.muscache.com/im/pictures/miso/Hosting-44552310/original/3914cc46-8881-41cd-8090-33e679305107.jpeg?im_w=1200");
        room1images.add("https://a0.muscache.com/im/pictures/67f4ea10-0e7e-41f5-a2b6-190215610d41.jpg?im_w=720");
        room1images.add("https://a0.muscache.com/im/pictures/584e8ac9-67d8-4e27-a40c-d67293d298c0.jpg?im_w=720");
        room1images.add("https://a0.muscache.com/im/pictures/5f1bc8eb-ddb6-4e4b-bc94-22c6fa740bb8.jpg?im_w=720");
        room1images.add("https://a0.muscache.com/im/pictures/miso/Hosting-44552310/original/409863fc-7057-4f0e-93b2-3f0fa9daed17.jpeg?im_w=720");
        List<String> room2images = new ArrayList<>();
        room2images.add("https://a0.muscache.com/im/pictures/dd9e507a-ea75-4634-bbdd-77c2ceb9adbf.jpg?im_w=1200");
        room2images.add("https://a0.muscache.com/im/pictures/b71b2c8d-5ca7-4326-aa59-9811985f7320.jpg?im_w=720");
        room2images.add("https://a0.muscache.com/im/pictures/934d9bb8-0c34-4a3e-85f5-e7b722855b00.jpg?im_w=720");
        room2images.add("https://a0.muscache.com/im/pictures/613cf352-4052-4ea3-ac14-8adad0836adb.jpg?im_w=720");
        room2images.add("https://a0.muscache.com/im/pictures/ff0277b5-2013-4dca-af1d-83ace4ee875a.jpg?im_w=720");
        List<String> room3images = new ArrayList<>();
        room3images.add("https://a0.muscache.com/im/pictures/a317fbfd-e121-4bcb-ac8b-f5720aaa016d.jpg?im_w=1200");
        room3images.add("https://a0.muscache.com/im/pictures/8a518449-1d87-4f5b-91db-e40e759db974.jpg?im_w=720");
        room3images.add("https://a0.muscache.com/im/pictures/cd05cf09-c7cf-4058-b6eb-f030bd4b76f4.jpg?im_w=720");
        room3images.add("https://a0.muscache.com/im/pictures/4725d94b-3f3b-4567-b5d1-bb08a3a131a0.jpg?im_w=720");
        room3images.add("https://a0.muscache.com/im/pictures/9273d0a4-a6de-422f-a33b-ea7f78c36504.jpg?im_w=720");
        RoomResponse room1 = new RoomResponse(room1images, 4.23, "제인네집", 994375);
        RoomResponse room2 = new RoomResponse(room2images, 4.73, "갯배도보5분/스카이씨리조트1316호", 114375);
        RoomResponse room3 = new RoomResponse(room3images, 4.7, "Seoul Sunday House", 85000);
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
    public ResponseEntity<RoomDetailPageResponse> viewDetailPage(@PathVariable Long roomId) {
        List<String> roomImages = new ArrayList<>();
        roomImages.add("https://a0.muscache.com/im/pictures/a317fbfd-e121-4bcb-ac8b-f5720aaa016d.jpg?im_w=1200");
        roomImages.add("https://a0.muscache.com/im/pictures/8a518449-1d87-4f5b-91db-e40e759db974.jpg?im_w=720");
        roomImages.add("https://a0.muscache.com/im/pictures/cd05cf09-c7cf-4058-b6eb-f030bd4b76f4.jpg?im_w=720");
        roomImages.add("https://a0.muscache.com/im/pictures/4725d94b-3f3b-4567-b5d1-bb08a3a131a0.jpg?im_w=720");
        roomImages.add("https://a0.muscache.com/im/pictures/9273d0a4-a6de-422f-a33b-ea7f78c36504.jpg?im_w=720");
        String title = "Seoul Sunday House (동대문/동묘역 가족 친구여행 2인기준, 주차 불가)";
        String roomDescription = "서울 동대문 상가 위치에 있고 ,도매시장 두타 면세점 ,동묘역 빈티지시장 등 과 가깝습니다. 공항버스랑 지하철 역 도보 5분입니다\n" +
                "성인 2명 가격기준, 아이 6살 이하 무료,성인 한명 추가시 20000 원 추가 됩니다.";
        double rating = 4.7;
        String host = "제인";
        String hostImage = "https://a0.muscache.com/im/pictures/user/524726c2-8633-479c-b7a7-88d964f3c713.jpg?im_w=240";
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
    public ResponseEntity<BookingResponse> reserve(@PathVariable Long roomId, @RequestBody BookingRequest reservationInfo) {
        String place = "서초구, 서울, 한국";
        String roomName = "Seoul Sunday House"; // roomId로 조회
        String checkInTime = "오후 04:00";
        String checkOutTime = "오후 12:00";
        String host = "제인";
        List<String> roomImages = new ArrayList<>();
        roomImages.add("https://a0.muscache.com/im/pictures/a317fbfd-e121-4bcb-ac8b-f5720aaa016d.jpg?im_w=1200");
        roomImages.add("https://a0.muscache.com/im/pictures/8a518449-1d87-4f5b-91db-e40e759db974.jpg?im_w=720");
        roomImages.add("https://a0.muscache.com/im/pictures/cd05cf09-c7cf-4058-b6eb-f030bd4b76f4.jpg?im_w=720");
        roomImages.add("https://a0.muscache.com/im/pictures/4725d94b-3f3b-4567-b5d1-bb08a3a131a0.jpg?im_w=720");
        roomImages.add("https://a0.muscache.com/im/pictures/9273d0a4-a6de-422f-a33b-ea7f78c36504.jpg?im_w=720");
        String checkIn = reservationInfo.getCheckIn() + " " + checkInTime;
        String checkOut = reservationInfo.getCheckOut() + " " + checkOutTime;
        int numberOfGuests = reservationInfo.getAdults() + reservationInfo.getChildren() + reservationInfo.getInfants();
        int totalPrice = reservationInfo.getTotalPrice();
        BookingResponse reservationResponse = new BookingResponse(roomImages, place, host, checkIn, checkOut, numberOfGuests, totalPrice);
        return new ResponseEntity<>(reservationResponse, HttpStatus.OK);
    }

    @DeleteMapping("/cancel/rooms/{roomId}")
    public ResponseEntity<String> cancel() {
        return new ResponseEntity<>("예약이 성공적으로 취소되었습니다.", HttpStatus.OK);
    }

    @PostMapping("/wish/rooms/{roomId}")
    public ResponseEntity<String> wish() {
        return new ResponseEntity<>("저장 완료", HttpStatus.OK);
    }

    @GetMapping("/wishlist")
    public ResponseEntity<List<RoomResponse>> viewWishList() {
        List<RoomResponse> wishList = new ArrayList<>();
        List<String> room1images = new ArrayList<>();
        room1images.add("https://a0.muscache.com/im/pictures/miso/Hosting-44552310/original/3914cc46-8881-41cd-8090-33e679305107.jpeg?im_w=1200");
        List<String> room2images = new ArrayList<>();
        room2images.add("https://a0.muscache.com/im/pictures/dd9e507a-ea75-4634-bbdd-77c2ceb9adbf.jpg?im_w=1200");
        RoomResponse room1 = new RoomResponse(room1images, 4.23, "제인네집", 994375);
        RoomResponse room2 = new RoomResponse(room2images, 4.73, "갯배도보5분/스카이씨리조트1316호", 114375);
        wishList.add(room1);
        wishList.add(room2);
        return ResponseEntity.ok(wishList);
    }
}
