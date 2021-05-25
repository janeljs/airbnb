package airbnb.domain;

public enum PropertyType {
    HOUSE("주택"),
    APARTMENT("아파트"),
    BNB("B&B"),
    BOUTIQUE_HOTEL("부티크 호텔"),
    GUEST_SUITE("게스트 스위트"),
    HOTEL("호텔"),
    TOWNHOUSE("타운하우스");

    private final String name;

    PropertyType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
