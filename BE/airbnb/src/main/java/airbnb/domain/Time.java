package airbnb.domain;

import lombok.Getter;

@Getter
public enum Time {
    HOUR("시간"), MINUTE("분");

    private final String name;

    Time(String unit) {
        this.name = unit;
    }
}
