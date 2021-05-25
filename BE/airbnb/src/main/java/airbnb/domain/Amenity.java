package airbnb.domain;

import lombok.Getter;

@Getter
public enum Amenity {
    KITCHEN("주방"),
    HEATING("난방"),
    AIR_CONDITIONING("에어컨"),
    WASHER("세탁기"),
    DRYER("건조기"),
    WIFI("무선 인터넷"),
    BREAKFAST("아침식사"),
    INDOOR_FIREPLACE("실내 벽난로"),
    IRON("다리미"),
    HAIR_DRYER("헤어드라이어"),
    DEDICATED_WORKSPACE("업무 전용 공간"),
    TV("TV"),
    CRIB("아기 침대"),
    HIGH_CHAIR("유아용 식탁의자"),
    SELF_CHECK_IN("셀프 체크인"),
    SMOKE_ALARM("화재경보기"),
    CARBON_MONOXIDE_ALARM("일산화탄소 경보기"),
    PRIVATE_BATHROOM("욕실 단독 사용"),
    BEACHFRONT("해변에 인접"),
    WATERFROMNT("수변에 인접");

    private final String name;

    Amenity(String name) {
        this.name = name;
    }
}
