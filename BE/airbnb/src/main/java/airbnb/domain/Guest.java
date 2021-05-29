package airbnb.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Embeddable;

@Embeddable
@NoArgsConstructor
@Getter
public class Guest {
    private Integer adults;
    private Integer children;
    private Integer infants;

    public int numberOfGuests() {
        return adults + children + infants;
    }
}
