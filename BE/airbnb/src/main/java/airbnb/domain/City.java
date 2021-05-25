package airbnb.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.text.DecimalFormat;

import static airbnb.domain.Time.HOUR;
import static airbnb.domain.Time.MINUTE;

@Entity
@Getter
@NoArgsConstructor
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double driveTime;
    private String image;

    public City(String name, double driveTime, String image) {
        this.name = name;
        this.driveTime = driveTime;
        this.image = image;
    }

    public String getProcessedDriveTime() {
        DecimalFormat df = new DecimalFormat("#.#");
        if (driveTime > 60) {
            driveTime /= 60;
            return df.format(driveTime) + HOUR.getName();
        }
        return df.format(driveTime) + MINUTE.getName();
    }
}
