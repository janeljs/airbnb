package airbnb.domain;

import lombok.*;

import javax.persistence.Embeddable;

@Embeddable
@NoArgsConstructor
@Builder
@Getter
public class Guest {
    private Integer adults;
    private Integer children;
    private Integer infants;

    public int numberOfGuests() {
        return adults + children + infants;
    }
}
