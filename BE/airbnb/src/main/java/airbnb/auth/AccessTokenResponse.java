package airbnb.auth;


import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AccessTokenResponse {
    @JsonSetter("access_token")
    private String accessToken;

    @JsonSetter("token_type")
    private String tokenType;

    @JsonSetter("scope")
    private String scope;
}



